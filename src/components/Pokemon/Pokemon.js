import React, {useContext} from 'react';
import FavoriteContext from '../contexts/favoriteContext'

/*Creamos un componente que solo muestra informacion basado en informacion que le pasamos de los props */

const Pokemon =  (props) => {

    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "❤";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(Pokemon.name) ? redHeart :blackHeart;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(Pokemon.name);
    }

    return (
        <div className= "pokemon-card">
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
                     )
                    })}</div>
                    <button onClick={clickHeart}>
                    <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;