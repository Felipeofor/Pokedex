import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import {getPokemonData, getPokemons} from  './api';

/*Aplicamos un hook */
const {useState, useEffect} = React;


export default function App() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    /*Protegemos la aplicacion ante cualquier error que pueda traer la api con try catch */
    try {
      const data = await getPokemons();/*Llamamos a la api */
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch (err) {
      
    }
  }

/*Le pasamos una funcion, pero hacemos que ejecute este codigo solo una vez cuando termine de renderizar con un array vacio*/
/*Para que refleje una lista de pokemons apenas ingresamos a la app */
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
        <div className="App">
          <Searchbar/>
          <Pokedex pokemons={pokemons}/>
        </div>
    </div>
  );
}

