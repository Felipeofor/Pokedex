import React from 'react';

/*BARRA DE NAVEGACION */

const Navbar = () => {
    /*Creamos la variable con la imagen importada de pokeapi 'logo' */
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav>
            <div />
            <div>
            <img src={imgUrl} 
            alt ='pokeapi-logo'
            className='navbar-image'/>
            </div> 
            <div>&#10084;&#65039; {100}</div>
            <div />
        </nav>
    )
}

export default Navbar;