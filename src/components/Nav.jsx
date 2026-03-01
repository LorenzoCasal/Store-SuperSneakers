import logo from '../assets/logo.png';
import { NavLink } from 'react-router';

function Nav() {
  return (
    <nav className='flex flex-row justify-between items-center h-28 w-full'>
      <NavLink to="/"><img src={logo} alt='logo de Supershoes' className="w-24"></img></NavLink>
      <ul className="flex gap-5 items-center list-none text-inherit mr-5">
        <li><NavLink to="/Products">Products</NavLink></li>
        <li><NavLink to="/Cart">🛒</NavLink></li>
        <li><NavLink to="/LogIn">Log In</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav