import React, { useReducer } from 'react';
import {logReducer} from '../reducer/logReducer'
export const useFormulario = () => {
    const initialState = { estado: "logged-out", userName: "" }
    const [state, dispatch] = useReducer(logReducer, initialState);

    const handleLogin = (userName) => {  
      
        const newUser = {
            estado: "logeado",
            userName
        };

        const action = {
            type: 'logged',
            payload: newUser,
        };

        dispatch(action);
    };

    const handleLogOut = () => {
        const newUser = {
            estado: "logged-out",
            username: ""
        };

        const action = {
            type: 'logged-out',
            payload: newUser,
        };

        dispatch(action);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const userName = ev.target.nombre.value;
        handleLogin(userName);  
        ev.target.nombre.value=""
      
    };
    console.log(state)

    return {
        state,
        handleLogin,
        handleLogOut,
        handleSubmit
    }
}