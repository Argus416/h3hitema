import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    isLoggedIn: false,
};

const currentUser = JSON.parse(localStorage.getItem("login"));
if (localStorage.getItem("login")) {
    const keys = Object.keys(currentUser);
    for (let key of keys) {
        initialState[key] = currentUser[key];
    }
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
        logout: (state) => {
            state = {};
            localStorage.removeItem("login");
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getUser, login, logout } = userSlice.actions;

export default userSlice.reducer;