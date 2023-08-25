import jwt from "jsonwebtoken";
import { JWTPHRASE, JWTEXPIRE } from '../config.js'

export const createAccessToken = (payload) => {

    return new Promise((resolve, reject) => {

        jwt.sign(payload, JWTPHRASE, {
            expiresIn: JWTEXPIRE
        }, (err, token) => {

            if (err) reject(err)
            resolve(token)
        })
    });

}