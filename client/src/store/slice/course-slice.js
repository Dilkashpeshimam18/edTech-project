import { createSlice } from "@reduxjs/toolkit";

const initialCourseState = {
    courses: [],
    courseDetail: {},
    rowPerPage: 10,
    allCourses: []

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
        addCourseDetail(state, action) {
            state.courseDetail = action.payload
        },
        updateRowPerPage(state, action) {
            state.rowPerPage = action.payload
        }
    }
})


// export const getAllCourse = () => {
//     return async (dispatch, state) => {
//         const getRequest = async () => {

//             const response = await axios.get('https://localhost:4000/courseexpense/get-allCourses')

//             console.log('Getting all course>>>',response)
//             const data = response.data

//             // dispatch(courseActions.addExpense(data))

//         }
//         try{ 
//                 await getRequest()


//         } catch (err) {
//             console.log(err)
//         }

//     }
// }

export const courseActions = CourseSlice.actions
export default CourseSlice.reducer