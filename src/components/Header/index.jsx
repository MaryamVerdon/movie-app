import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Header(){

    return (
        <header className="header">
            <nav className="navbar"> 
            <Link className='linkHome' to="/">STUDIO GHIBLI FILMS</Link> 
            <Link to="/favorites">Favoris</Link> 
            </nav>
            <Outlet />
        </header>
        
    )
}

export default Header