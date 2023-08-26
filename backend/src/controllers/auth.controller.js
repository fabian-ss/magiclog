import { pool } from '../db.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js';

export const signin = async (req, res, next) => {

    const { email, password } = req.body

    const result = await pool.query('SELECT * FROM users WHERE email=$1;', [email])

    if (result.rowCount === 0) {
        return res.status(400).json({ "msg": "unregistered mail" });
    }

    const confirmpass = await bcrypt.compare(password, result.rows[0].password)

    if (!confirmpass) {
        return res.status(408).json({ "msg": "Wrong password" });
    }

    const token = await createAccessToken({ id: result.rows[0].id })

    res.cookie('token', token, {
        // httpOnly: true,
        secure:true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    return res.json({ "data": result.rows[0] });
};

export const signup = async (req, res, next) => {

    const { email, password } = req.body

    try {
        const hashPass = await bcrypt.hash(password, 15);

        const result = await pool.query('INSERT INTO users(email,password,role) VALUES($1,$2,$3) RETURNING *;', [email, hashPass, 1]);

        const token = await createAccessToken({ id: result.rows[0].id })

        res.cookie('token', token, {
            // httpOnly: true,
            secure:true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })
        return res.json({ "data": result.rows[0] });

    } catch (error) {
        if (error.code == "23505") {
            return res.status(409).json({ "msg": "registered email" });
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



