import React from 'react'
import { Routes,Route } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import HomePage from '../pages/Home/HomePage';
import DetailPage from '../pages/Detail/DetailPage';
import FormPage from '../pages/Form/FormPage';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path='/home' element={ <HomePage /> } />
            <Route path='/detail/:id' element={ <DetailPage /> } />
            <Route path='/form' element={ <FormPage /> } />
        </Routes>
    </>
  )
}

export default AppRoutes