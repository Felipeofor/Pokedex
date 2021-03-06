//Importamos los componentes
import React from 'react';
import FavoriteContext from '../contexts/FavoriteContext';

/*BARRA DE NAVEGACION */

const { useContext } = React;

const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);

    /*Creamos la variable con la imagen importada de pokeapi 'logo' */
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav>
            <div/>
            <div>
            <img src={imgUrl} 
            alt ='pokeapi-logo'
            className='navbar-image'/>
            </div> 
            <div> {favoritePokemons.lenght}</div>
            <div />
        </nav>
    )
}

export default Navbar;