import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    intialState: {
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {},
    }
});

export const { loginStart } = userSlice.actions;
export default userSlice.reducer;