
import { logReducer } from '../reducer/logReducer'
import { UserProvider } from '../../context/UserProvider';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';



export const useFormulario = () => {


    

    const {state, setState}=useContext(UserContext)
    console.log(state)

    const handleLogin = (userName) => {

       
       setState (
           {estado: 'logged',
           userName
        }
          ) ;

    
    };

   const handleLogOut = () => {
      

       setState(
           {estado: 'logged-out',
           userName
        }
            );

       
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const userName = ev.target.nombre.value;
        handleLogin(userName);
       ev.target.nombre.value = ""

    };
    console.log(state)

    return {
        state,
        handleLogin,
        handleLogOut,
        handleSubmit
    }
}