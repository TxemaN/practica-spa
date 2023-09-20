import React, { useReducer } from 'react'
import { logReducer } from '../reducer/logReducer'

export const useFormulario = () => {
    const initialState = { estado: "logged-out", userName: "" }
    const [state, dispatch] = useReducer(logReducer, initialState)


    const handleLogin = (ev) => {
        ev.preventDefault()
        const newUser = {
            estado: "logeado",
            username: nombre.value,
        }

        const action = {
            type: 'logged',
            payload: newUser,
        }

        dispatch(action)


    }
    const handleLogOut = () => {
        const newUser = {
            estado: "logged-out",
            username: "",
        }

        const action = {
            type: 'logged-out',
            payload: newUser,
        }

        dispatch(action)


    
    }


    return {
        state,
        handleLogin,
        handleLogOut

    }
}
