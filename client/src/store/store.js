import { configureStore } from "@reduxjs/toolkit";
import authRducer from './slice/auth-slice'
import courseReducer from './slice/course-slice'

const store = configureStore({
    reducer: {
        auth: authRducer,
        course: courseReducer
    }
})

export default store