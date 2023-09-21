import { NavLink } from 'react-router-dom';
import { useFormulario } from '../auth/hooks/useFormulario';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const NavBar = () => {

    const { handleLogOut } = useFormulario();
    const { state } = useContext(UserContext);
    const { userName } = state;

    return (
        <>
            <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                <div className='container-fluid'>
                <p className="navbar-brand">TheBridge</p>
                    <ul className='navbar-nav mb-2'>
                        <li className='nav-item'>
                            <NavLink
                                to='/'
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/telefonosmoviles'
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                Smartphones</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/muebles'
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                Furniture</NavLink>
                        </li>
                    </ul>
                </div>
            
            <div className=''>
                <p className=''>Hola {userName.toUpperCase()}</p>
                <button className='mb-3 btn btn-dark' onClick={handleLogOut}>Log out</button>
                

            </div>
            </nav>
        </>
    );
};