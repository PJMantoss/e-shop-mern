import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    intialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {}
});