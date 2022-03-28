import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    returned: []
};

const cartSlice = createSlice({
    name: "cart",
    intialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state = initialState, action) => {
            state.quantity += 1;
            state.product.push(action.payload.product);
            state.total += action.payload.price * action.payload.quantity
        },
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;