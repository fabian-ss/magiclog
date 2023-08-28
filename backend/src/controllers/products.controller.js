import { pool } from '../db.js'

export const getProducts = async (req, res, next) => {

    const result = await pool.query('SELECT * FROM products')

    console.log("ddd");

    if (result.rowCount === 0) {
        return res.json([{ "data": 0 }]);
    } else {
        return res.json(result.rows);
    }
    next()

};

export const getAdminProducts = async (req, res, next) => {

    const result = await pool.query('SELECT * FROM products;')

    if (result.rowCount === 0) {
        return res.json({ "msg": "No registered products" });
    } else {
        return res.json(result.rows);
    }

};

export const getProductbyId = async (req, res, next) => {

    const result = await pool.query('SELECT * FROM products WHERE id=$1;', [req.params.id])

    if (result.rowCount === 0) {
        return res.status(404).json({ "msg": "Product not found" });
    } else {
        return res.json(result.rows[0]);
    }

};

export const createProduct = async (req, res, next) => {
    
    const { name, sku, count, price } = req.body;

    try {
        await pool.query('INSERT INTO products(name,sku,count,price,user_id) VALUES($1,$2,$3,$4,$5) RETURNING id;', [name, sku, count, price,req.userId])

        return res.json("Created");

    } catch (error) {

        if (error.code == "23505") {
            return res.status(409).json({ "msg": "Ese Sku ya esta registrado" });
        }
        next(error)
    }

};


export const updateProduct = async (req, res, next) => {

    const id = req.params.id
    const { name, count, price } = req.body;

    const result = await pool.query('UPDATE products SET name=$1,count=$2,price=$3,updated=$4 WHERE id=$5 RETURNING *;', [name, count, price, "NOW()", id])

    if (result.rowCount === 0) {
        return res.status(404).json({ "msg": "Product not found" });
    } else {
        return res.json({ "msg": "Updated product", "product": result.rows[0] });
    }

};

export const deleteProduct = async (req, res, next) => {

    const result = await pool.query('DELETE FROM products WHERE id=$1;', [req.params.id])

    if (result.rowCount === 0) {
        return res.status(404).json({ "msg": "The product does not exist" });
    } 
    
    return res.sendStatus(204);

};

