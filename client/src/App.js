import React from 'react';
import './App.css';
import AllCourse from './components/Courses/AllCourse/AllCourse';
import CourseDetail from './components/Courses/CourseDetail/CourseDetail';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/Signup/Sigup';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {

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
