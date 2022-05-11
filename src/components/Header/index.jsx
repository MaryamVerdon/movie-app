import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Header(){

    return (
        <header className="Header">
            <nav className="Navbar"> 
            <h2>STUDIO GHIBLI FILMS</h2>
            <Link to="/">Accueil</Link> 
            <Link to="/favorites">Favoris</Link> 
            </nav>
            <Outlet />
        </header>
        
    )
}

export default Header