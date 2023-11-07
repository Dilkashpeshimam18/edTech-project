import { configureStore } from "@reduxjs/toolkit";
import authRducer from './slice/auth-slice'

const store = configureStore({
    reducer: {
        auth: authRducer,
    }
})

export default store