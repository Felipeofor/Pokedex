export const searchPokemon = async (pokemon) => {
    /*Protegemos la aplicacion ante cualquier error que pueda traer la api */
    try {
        /*Creamos una variable que consume de la api el pokemon que el usuario este buscando */
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url);/*Fetch nos permite obtener la informacion de esa url*/
        const data = await response.json();/*Pasamos la informacion recibida a Json*/
        return data;/*Retornamos esa infomarcion a nuestro componente de React */
    }
    catch (err) {

    }
}