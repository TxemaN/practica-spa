import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  const evento = () => {
 //NO OLVIDAR DE PONER A CLASE DE LOS BOTONES NO CSS 
  }
  return (
     <nav>
      <ul>
        <li>
          <NavLink
           className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}
          to='/' >
          Home
          </NavLink>
        </li>
        <li>
          <NavLink
           className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}
          to='/Mobile'>
           Mobile 
          </NavLink>
        </li>
        <li>
          <NavLink
           className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}
          to='/Muebles'>
           Muebles
          </NavLink>
        </li>
      </ul>
      <p>Hola ....</p>
      <button onClick={evento}>
        Logout
      </button>
     </nav>
  )
}
