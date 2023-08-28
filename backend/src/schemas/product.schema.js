import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string({
            required_error: "El titulo es requerido"
        })
        .min(1).max(255),
    sku: z
        .string({
            required_error: "El Sku es requerido"
        })
        .min(1).max(255),
    count: z
        .number({
            required_error: "La cantidad es requerida",
            invalid_type_error: "La cantidad debe ser un numero"
        }),
    price: z
        .number({
            required_error: "El precio es requerido",
            invalid_type_error: "El precio debe ser un numero"
        })
})

