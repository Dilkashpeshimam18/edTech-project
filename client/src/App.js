import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllCourse from './components/AllCourse/AllCourse';
import CourseDetail from './components/CourseDetail/CourseDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCourse />,
  },
  {
    path:'/course-detail/:id',
    element:<CourseDetail />
  }
]);
function App() {

  return (
    <div className="App">
      <h1>EdTech Projects</h1>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
