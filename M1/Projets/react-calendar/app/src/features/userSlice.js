import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = JSON.parse(localStorage.getItem("login"));

const initialState = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    isLoggedIn: false,
};

if (isLoggedIn.length) {
    const keys = Object.keys(isLoggedIn);
    console.log(keys, "kye");
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state) => {
            return state;
        },
        login: (state, action) => {
            state = action.payload;
            localStorage.setItem("login", JSON.stringify(state));
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getUser, login } = userSlice.actions;

export default userSlice.reducer;