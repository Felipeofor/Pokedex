import React from 'react';

/*Creamos un componente que solo muestra informacion basado en informacion que le pasamos de los props */

const Pokemon =  (props) => {

    const {pokemon} = props;

    return (
        <div className= "pokemon-card">
            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div> 
                </div>
                <div>
                    <div>{pokemon.types.map((type,idx) => {
                     return (
                         <div key={idx}>{type.name}</div>
                     )
                    })}</div>
                    <div>❤</div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;