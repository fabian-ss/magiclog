import { z } from "zod";

export const signupUserSchema = z.object({
    name: z
        .string({
            required_error: "El nombre es requerido"
        }).min(1).max(255),
    email: z
        .string({
            required_error: "El correo es requerido"
        })
        .min(1).max(255),
    password: z
        .string({
            required_error: "La contraseña es requerida"
        })
        .min(1).max(255),
})


export const signinUserSchema = z.object({
    email: z
        .string({
            required_error: "El correo es requerido"
        })
        .min(1).max(255),
    password: z
        .string({
            required_error: "La contraseña es requerida"
        })
        .min(1).max(255),
})

