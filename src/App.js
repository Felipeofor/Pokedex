import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import {getPokemonData, getPokemons} from  './api';
import {FavoriteProvider} from './components/contexts/favoriteContext';

/*Aplicamos un hook */
const {useState, useEffect} = React;


export default function App() {

  const [pokemons, setPokemons] = useState([]);
  /*Creamos las paginas donde se va a mostrar los pokemons */
  const [page, setPage] = useState();
  const [total,setTotal] = useState(0);
  /*Creamos una cost que nos muestre un mensaje que los pokemoms se estan cargando y cuando termine de cargar cambia su estado a false*/
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);


  const fetchPokemons = async () => {
    /*Protegemos la aplicacion ante cualquier error que pueda traer la api con try catch */
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);/*Llamamos a la api con la cantidad de pokemons que queremos y lo multiplicamos por la pagina en la que estemos*/
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      /*Cambio de estado de setLoading cuando se termina la carga */
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (err) {
      
    }
  }

/*Le pasamos una funcion, pero hacemos que ejecute este codigo solo una vez cuando termine de renderizar. Lo hacemos con un array vacio*/
/*Para que refleje una lista de pokemons cuando ingresamos a la app */
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  /*Creamos la constante donde vamos a poder agregar o quitar los pokemons favoritos */

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    }
    else {
      updated.push(name);
    }
    setFavorites(updated);
  }

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites, 
    updateFavoritePokemons: updateFavoritePokemons
    }}>
    <div>
      <Navbar />
        <div className="App">
          <Searchbar/>
          <Pokedex 
            loading = {loading}
            pokemons = {pokemons}
            page = {page}
            setPage = {setPage}
            total = {total}
          />
        </div>
      </div>
    </FavoriteProvider>
    
  );
}

