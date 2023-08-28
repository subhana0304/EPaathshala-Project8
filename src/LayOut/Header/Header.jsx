import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className='md:mx-8'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/product">Products</Link>
                        
                        {user ? <span>{user.displayName}</span> : <Link to="/signUp">SignUp</Link>}
                        
                        { user ? <button onClick={handleLogOut} className='btn btn-error text-white'>LogOut</button> : <Link to="/signIn">SignIn</Link> }
                        
                        </ul>
                    </div>
                    <span className='text-2xl font-bold text-error'><Link to="/">Shop-Store</Link></span>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1 space-x-3">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/product">Products</Link>
                        {user ? <span>{user.displayName}</span> : <Link to="/signUp">SignUp</Link>}
                        { user ? <button onClick={handleLogOut} className='btn btn-error text-white'>LogOut</button> : <Link to="/signIn">SignIn</Link> }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;