import React, { useEffect } from 'react';
import './App.css';
import CourseDetail from './components/Courses/CourseDetail/CourseDetail';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/Signup/Sigup';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { useDispatch } from 'react-redux';
import { courseActions } from './store/slice/course-slice';
import Dashboard from './components/StudentDashboard/Dashboard';
import { getAllCourse,getEnrolledCourse } from './store/slice/course-slice';
function App() {
  const dispatch = useDispatch()
//   const getCourses = async () => {
//     try {
//       const res = await axios.get('http://localhost:4000/course/allCourses')
//       const courses = res.data.courses

//       dispatch(courseActions.addAllCourse(courses))

//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const getEnrolledCourse = async () => {
//     try {
//         const token = localStorage.getItem('token')

//         let reqInstance = await axios.create({
//             headers: {
//                 Authorization: token
//             }
//         })

//         const response = await reqInstance.get('http://localhost:4000/course/get-enrolled-course')
//         console.log('enrolled cpurse>>>', response)
//         const courses = response.data.enrolledCourses
//       dispatch(courseActions.addEnrolledCourse(courses))

//     } catch (err) {
//         console.log(err)
//     }
// }
useEffect(() => {
  dispatch(getAllCourse()) 

   dispatch(getEnrolledCourse()) 
}, [])

  // useEffect(() => {
  //   getCourses()
  // }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="course-detail/:id" element={<CourseDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path='student-dashboard' element={<Dashboard />} />

      </Routes>


    </div>
  );
}

export default App;
