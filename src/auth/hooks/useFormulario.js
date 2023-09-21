
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const useFormulario = () => {

    const { state, setState } = useContext(UserContext);

    const handleLogin = (userName) => {

        setState(
            {
                estado: 'logged',
                userName
            }
        );
    };

    const handleLogOut = () => {
        setState(
            {
                estado: 'logged-out',
                userName: ""
            }
        );
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const userName = ev.target.nombre.value;
        handleLogin(userName);
        ev.target.nombre.value = ""
    };

    return {
        state,
        handleLogin,
        handleLogOut,
        handleSubmit
    };
};