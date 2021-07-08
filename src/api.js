/*Aqui estan las constantes que consumen de la api */
/*Buscamos el pokemon que el usuario ingreso */

export const searchPokemon = async (pokemon) => {
    /*Protegemos la aplicacion ante cualquier error que pueda traer la api con try catch */
    try {
        /*Creamos una variable que consume de la api el pokemon que el usuario este buscando */
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`/*Buscamos el pokemon que el usuario ingreso */
        const response = await fetch(url);/*Fetch nos permite obtener la informacion de esa url*/
        const data = await response.json();/*Pasamos la informacion recibida a Json*/
        return data;/*Retornamos esa infomarcion a nuestro componente de React */
    }
    catch (err) {

    }
};

/*Cargamos una x cantidad de pokemon en la pantalla principal */

export const getPokemons = async (limit=25, offset=0) => {
    try {
        /*Creamos una variable que consume de la api el pokemon que el usuario este buscando */
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`/*Cargamos una x cantidad de pokemon en la pantalla principal */
        const response = await fetch(url);/*Fetch nos permite obtener la informacion de esa url*/
        const data = await response.json();/*Pasamos la informacion recibida a Json*/
        return data;/*Retornamos esa infomarcion a nuestro componente de React */
    }
    catch (err) {

    }
}

/*Obtenemos mas informacion de cada pokemon para renderizar las tarjetas */

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);/*Fetch nos permite obtener la informacion de la url*/
        const data = await response.json();/*Pasamos la informacion recibida a Json*/
        return data;/*Retornamos esa infomarcion a nuestro componente de React */
        
    } catch (err) {
        
    }
}