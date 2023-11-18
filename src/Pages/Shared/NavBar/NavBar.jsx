import {Link} from "react-router-dom";
import logo from '../../../assets/logo.svg'
import {useContext} from "react";
import {AuthContext} from "../../../Providers/Auth";
import avatar from '../../../assets/avatar.jpg'



const NavBar = () => {
  const {user,handleSignOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
  handleSignOut()
  .then(()=>{
    
  })
  .catch(error => {console.log(error)})
}
    const navItems = <>
   <li> <Link to='/'>Home</Link></li>
   <li> <Link to='/services'>Services</Link></li>
   <li> <Link to='/about'>About</Link></li>
   <li> <Link to='/contact'>Contact</Link></li>
  {user?   <li> <Link to='/bookings'>My bookings</Link></li>:
  <li> <Link to='/login'>Login</Link></li>
}</>

    return (
        <div className="navbar bg-base-200 h-5 mb-8 mt-4 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl h-16 "><img className="h-12" src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
 {user? <div className="navbar-end">
  <div className="avatar">
  <div className="w-10 mr-5 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
    <img src={avatar} />
  </div>
</div>
  <button onClick={handleLogOut} className="btn btn-outline btn-error">Logout</button>
  </div>:<div className="navbar-end">
  <Link to='/login'><button className="btn btn-outline btn-error">Login</button></Link>
  </div>}
</div>
    );
};

export default NavBar;