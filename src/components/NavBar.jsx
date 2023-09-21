import {NavLink} from 'react-router-dom';


export const NavBar = () => {
  return (
    
     <div className='container'>
        <nav className='navBar'>
           <ul>
            <li>
                <NavLink
                to='/'
                className= {({isActive}) => `nav ${isActive ? 'text-red' : ''}`}
                >
                    Home

                </NavLink>
            </li>
            <li>
                <NavLink
                to='mobile'
                className= {({isActive}) => `nav ${isActive ? 'rojo' : ''}`}
                >
                    Cellphone 
                </NavLink>
            </li>
            <li>
                <NavLink
                to='muebles'
                className= {({isActive}) => `nav ${isActive ? 'rojo' : ''}`}
                >
                    Muebles
                    
                </NavLink>
            </li>
           </ul>
        </nav>
        <p>Hola ...</p>
        <button onClick={() => {}}>
            Logout
        </button>
     </div>

  )
}
