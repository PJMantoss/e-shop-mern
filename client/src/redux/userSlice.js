import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    intialState: {
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {},
        loginSuccess: (state) => {},
    }
});

export const { addProduct } = userSlice.actions;
export default userSlice.reducer;