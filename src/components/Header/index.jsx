import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Header(){

    return (
        <div>
            <p>My Header</p>
            
            <nav>
            <Link to="/">Accueil</Link>
            <Link to="/favorites">Favoris</Link>  
            </nav>
            <Outlet />
        </div>
        
    )
}

export default Header