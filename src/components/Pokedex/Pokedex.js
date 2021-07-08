import React from 'react';

const Pokedex = (props) => {

    /*Obtengo la informacion del props*/
    const {pokemons} = props;

    /*Recorremos la const pokemos con map */
    /*Los enumeramos con {idx+1}*/
    /*Aplicamos una key para los nombre de los pokemons */

    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return (
                        <div key={pokemon.name}>
                            #{idx+1}: {pokemon.name}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Pokedex;