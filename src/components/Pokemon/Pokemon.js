//Importamos los componentes
import React, {useContext, Link} from 'react';
import FavoriteContext from '../contexts/FavoriteContext'
import {Modal} from '../Modal/Modal';
import { useState } from "react";
import { searchPokemon } from '../../api';

/*Creamos un componente que solo muestra informacion basado en informacion que le pasamos de los props */



const Pokemon =  (props) => {

      /*Modal */

    const [showModal, setShowModal] = useState(false);
    const openModal = (props) => {
      setShowModal(true, props);
    };



    /*Selecciono mi pokemons favoritos*/
    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart :blackHeart;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
        const data =  searchPokemon(pokemon.name);
        console.log(data); 
    }

    

    return (
        
        <div className= "pokemon-card"><Link to="/Modal">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div> 
                </div>
                <div className="card-botton">
                    <div className="pokemon-type">{pokemon.types.map((type,idx) => {
                     return (
                         <div key={idx} className="pokemon-type-text" >{type.type.name}</div>
                     );
                    })}
                    </div>
                    <button onClick={clickHeart}  className="pokemon-heart-btn">
                    <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
                <div>
            <button className="caracteristicas-btn" onClick={openModal} 
            value={pokemon.name}>Ver caracteristicas</button>
            {showModal ? <Modal setShowModal={setShowModal}
                                     elements = {props} 
            /> : null}
            </div>
            </div>
            </Link>
        </div>
    );
};

export default Pokemon;