import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, LogInPage, ProductPage } from "../pages"



export const AppRouter = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LogInPage />} />
            <Route path='producto' element={<ProductPage />} />

        </Routes>
    )
}
