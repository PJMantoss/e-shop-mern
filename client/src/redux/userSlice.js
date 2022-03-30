import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    intialState: {
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (action) => {
            state.quantity += 1;
            state.product.push(action.payload.product);
            state.total += action.payload.price * action.payload.quantity
        },
    }
});

export const { addProduct } = userSlice.actions;
export default userSlice.reducer;