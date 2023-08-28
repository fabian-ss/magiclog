import { pool } from '../db.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js';

export const signin = async (req, res, next) => {

    const { email, password } = req.body

    const result = await pool.query('SELECT * FROM users WHERE email=$1;', [email])

    if (result.rowCount === 0) {
        return res.status(404).json({ "msg": "El correo no existe" });
    }

    const confirmpass = await bcrypt.compare(password, result.rows[0].password)

    if (!confirmpass) {
        return res.status(404).json({ "msg": "Contraseña incorrecta" });
    }

    const token = await createAccessToken(
        {
            id: result.rows[0].id,
            name: result.rows[0].name,
            email: result.rows[0].email,
            role: result.rows[0].role === 0 ? 'administrador' : 'vendedor'
        }
    )

    console.log(token);
    res.cookie('token', token, {
        sameSite:false,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    console.log(data);
    return res.json({ success: true });
};

export const signup = async (req, res, next) => {

    const { email, password, name } = req.body

    try {
        const hashPass = await bcrypt.hash(password, 15);

        const result = await pool.query('INSERT INTO users(email,password,name,role) VALUES($1,$2,$3,$4) RETURNING *;', [email, hashPass, name, 1]);

        // const token = await createAccessToken({ id: result.rows[0].id })

        const token = await createAccessToken(
            {
                id: result.rows[0].id,
                name: result.rows[0].name,
                email: result.rows[0].email,
                role: result.rows[0].role === 0 ? 'administrador' : 'vendedor'
            }
        )

        res.cookie('token', token, {
            sameSite:false,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })

        const data = {
            id: result.rows[0].id,
            email: result.rows[0].email
        }

        console.log(data);
        return res.json({ success: true });

    } catch (error) {
        if (error.code == "23505") {
            return res.status(409).json({ "msg": "Este correo ya esta registrado" });
        }
        next(error)
    }

};

export const logout = async (req, res, next) => {

    res.clearCookie('token');

    return res.sendStatus(200);
};

export const salesman = async (req, res, next) => {

    const result = await pool.query('SELECT id, "role", "name",email FROM users;')

    if (result.rowCount === 0) {
        return res.json({ "msg": "No registered users" });
    }

    return res.json(result.rows);
};



