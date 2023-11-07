import { createSlice } from "@reduxjs/toolkit";

const initialCourseState = {
    courses: [],

}

const CourseSlice = createSlice({
    name: 'expenses',
    initialState: initialCourseState,
    reducers: {
        addCourse(state, action) {
            if (Array.isArray(action.payload)) {
                state.courses = action.payload
            } else {
                state.courses.push(action.payload)

            }

        },
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