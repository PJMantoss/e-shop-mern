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
        loginSuccess: (state, action) => {},
        loginFailure: (state) => {},
    }
});

export const {  } = userSlice.actions;
export default userSlice.reducer;