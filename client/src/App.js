import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CourseDetail from './components/Courses/CourseDetail/CourseDetail';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/Signup/Sigup';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { useDispatch } from 'react-redux';
import { courseActions } from './store/slice/course-slice';

function App() {
  const dispatch = useDispatch()
  const getCourses = async () => {
    try {
      const res = await axios.get('http://localhost:4000/course/allCourses')
      const courses = res.data.courses

      dispatch(courseActions.addAllCourse(courses))

    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="course-detail/:id" element={<CourseDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />

      </Routes>


    </div>
  );
}

export default App;
