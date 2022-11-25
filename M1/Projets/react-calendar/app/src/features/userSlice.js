import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state) => {
            return state;
        },
        login: (state, action) => {
            state = {...action.payload };
        },
    },
});

// Action creators are generated for each case reducer function
export const { getUser, login } = userSlice.actions;

export default userSlice.reducer;