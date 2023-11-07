import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllCourse from './components/AllCourse/AllCourse';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/Signup/Sigup';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './components/Auth/Logout/Logout';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCourse />,
  },
  {
    path: '/course-detail/:id',
    element: <CourseDetail />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
]);
function App() {
  const userToken = useSelector(state => state.auth.userToken)


  return (
    <div className="App">
      <h1>EdTech Projects</h1>
      {
        userToken ? (
          <>

            <div >

              <Logout />

            </div>

          </>

        ) : (
          <div >
            <Link to='/login'><button className='header__authBtn'>Login</button></Link>

          </div>
        )
      }
      <Routes>
        <Route path="/" element={<AllCourse />} />
        <Route path="course-detail/:id" element={<CourseDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />

      </Routes>


    </div>
  );
}

export default App;
