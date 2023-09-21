import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { CellPage, HomePage, LogInPage, MueblesPage, ProductPage } from "../pages"



export const AppRouter = () => {

    const state = ''
    return (


        state === 'logged-out' ? (

            <Routes>
                <Route path='login' element={<LogInPage />} />
                <Route path='/*' element={<Navigate to='/login' />} />
            </Routes>

        ) : (


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='muebles' element={<MueblesPage />} />
                <Route path='mobile' element={<CellPage />} />
                <Route path='producto/:id' element={<ProductPage />} />
                <Route path='/*' element={<Navigate to='/'/>} />
            </Routes>


        )
    );
}
