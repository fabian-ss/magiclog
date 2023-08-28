import jwt from "jsonwebtoken";
import { JWTPHRASE } from '../config.js'
import { pool } from '../db.js'

export const isAuth = (req, res, next) => {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: 'No tienes permisos para realizar esta operación'
        });
    };

    jwt.verify(token, JWTPHRASE, (err, decoded) => {
        
        if (err) return res.status(401).json({
            message: 'unauthorized'
        });

        req.userId = decoded.id;
        next();
    })
}

export const isAdmin = async (req, res, next) => {

    await pool.query('SELECT role FROM users WHERE id=$1;', [req.userId]).then((data) => {

        req.role = data.rows[0].role

        if (data.rows[0].role !== 0) {
            return res.status(401).json({
                message: 'No tienes permisos para realizar esta operación'
            });
        };
        
        next()
    })

}
