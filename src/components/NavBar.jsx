import {NavLink} from 'react-router-dom';
import { useFormulario } from '../auth/hooks/useFormulario';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const NavBar = () => {
    
    const {handleLogOut} = useFormulario()
    const {state} = useContext(UserContext)
    const {userName} = state
    return (

       

        <div className='container'>
           <nav className='navBar'>
              <ul>
               <li>
                   <NavLink
                   to='/'
                   className= {({isActive}) => `nav-link ${isActive ? 'text-red '  : ''}`}
                   >
                       Home   
                   </NavLink>
               </li>
               <li>
                   <NavLink
                   to='/mobile'
                   className= {({isActive}) => `nav-link ${isActive ? 'text-red' : ''}`}
                   >
                       Cellphone 
                   </NavLink>
               </li>
               <li>
                   <NavLink
                   to='/muebles'
                   className= {({isActive}) => `nav-link ${isActive ? 'text-red' : ''}`}
                   >
                       Muebles  
                   </NavLink>
               </li>
              </ul>
           </nav>
           <p>Hola {userName.toUpperCase()}</p>
           <button onClick={handleLogOut}>
               Logout
           </button>
        </div>
     );
};
