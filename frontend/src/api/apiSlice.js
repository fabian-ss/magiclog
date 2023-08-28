import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = import.meta.env.VITE_BACKEND

export const apiSlice = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl:baseURL,
        credentials: 'include',
    }),
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => '/api/products',
            providesTags: ["Products"],
        }),
        register: builder.mutation({
            query: (registerUser) => ({
                url: '/api/signup',
                method: 'POST',
                body: registerUser
            }),
        }),
        signin: builder.mutation({
            query: (signinUser) => ({
                url: '/api/signin',
                method: 'POST',
                body: signinUser
            }),
        }),
        register: builder.mutation({
            query: (newProduct) => ({
                url: '/api/signup',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ["Products"]
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/api/products',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ["Products"]
        }),
    }),
});


export const {
    useGetProductsQuery,
    useCreateProductMutation,
    useRegisterMutation,
    useSigninMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
} = apiSlice