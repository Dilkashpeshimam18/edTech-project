import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialCourseState = {
    courses: [],
    courseDetail: {},
    rowPerPage: 10,
    allCourses: [],
    enrolledCourse: []

}

const CourseSlice = createSlice({
    name: 'course',
    initialState: initialCourseState,
    reducers: {
        addCourse(state, action) {
            if (Array.isArray(action.payload)) {
                state.courses = action.payload
            } else {
                state.courses.push(action.payload)

            }

        },
        addAllCourse(state, action) {
            if (Array.isArray(action.payload)) {
                state.allCourses = action.payload
            } else {
                state.allCourses.push(action.payload)

            }

        },
        addEnrolledCourse(state, action) {
            if (Array.isArray(action.payload)) {
                state.enrolledCourse = action.payload
            } else {
                state.enrolledCourse.push(action.payload)

            }

        },
        addCourseDetail(state, action) {
            state.courseDetail = action.payload
        },
        updateRowPerPage(state, action) {
            state.rowPerPage = action.payload
        }
    }
})


export const getAllCourse = () => {
    return async (dispatch, state) => {
        const getRequest = async () => {

            const res = await axios.get('http://localhost:4000/course/allCourses')
            const courses = res.data.courses

            dispatch(courseActions.addAllCourse(courses))

        }
        try {
            await getRequest()


        } catch (err) {
            console.log(err)
        }

    }
}
export const getEnrolledCourse = () => {
    return async (dispatch, state) => {
        const getRequest = async () => {

            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const response = await reqInstance.get('http://localhost:4000/course/get-enrolled-course')
            console.log('enrolled cpurse>>>', response)
            const courses = response.data.enrolledCourses
            dispatch(courseActions.addEnrolledCourse(courses))

        }
        try {
            await getRequest()


        } catch (err) {
            console.log(err)
        }

    }
}
export const courseActions = CourseSlice.actions
export default CourseSlice.reducer