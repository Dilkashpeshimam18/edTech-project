import { createSlice } from '@reduxjs/toolkit'

export const initialAuthState = {
    isAuthenticated: localStorage.getItem('token') != null ? true : false,
    userToken: localStorage.getItem('token') || null,
    userEmail: localStorage.getItem('email') || null,
    name: '',
}


const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.userToken = action.payload.token
            state.userEmail = action.payload.email
            state.isAuthenticated = true
        },
        logout(state, action) {
            state.userToken = null
            state.userEmail = null
            state.isAuthenticated = false
        },

    }
})



export const authActions = AuthSlice.actions
export default AuthSlice.reducer