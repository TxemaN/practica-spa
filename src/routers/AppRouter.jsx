import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { CellPage, HomePage, LogInPage, MueblesPage, ProductPage } from "../pages"



export const AppRouter = () => {

    const state = 'logged-out'
    return (


       (state === '')?(

            <Routes>
                <Route path='login' element={<LogInPage />} />
                <Route path='/*' element={<Navigate to='/login' />} />
            </Routes>

        ) : (


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='muebles' element={<MueblesPage />} />
                <Route path='mobile' element={<CellPage />} />
                <Route path='producto' element={<ProductPage />} />
                <Route path='/*' element={<Navigate to='/'/>} />
            </Routes>


        )
    );
}
