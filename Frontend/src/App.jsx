import React from 'react'
import Home from './Home/Home';
import Course from './Course/Courses';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
      <div className=' dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>

    </>
  )
}

export default App