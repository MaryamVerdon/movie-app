import React from 'react'
import logo from '../../assets/ghibli_logo.png'


function Banner(){
   return(
    <div className="bannerDiv">
        <img src={logo} alt="Ghibli Logo" className="GhibliLogo" />
    </div>
   ) 
}

export default Banner