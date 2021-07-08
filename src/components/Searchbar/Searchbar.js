import React from 'react';
import {searchPokemon} from '../../api';
/*Le avisamos a React que renderice con cada cambio de estado*/
const {useState} = React; 


/*BUSCADOR DE POKEMON*/


const Searchbar = () => {

    /*Ingreso el valor inicial del search*/
    const [search, setSearch] = useState('');

    const onChange = (evt) => {
        console.log(evt.target.value);
        /*Actualizamos el DOM con cada cambio que ingrese el usuario*/
        setSearch(evt.target.value);
    }
    /*Cuando presionemos el boton llamaremos a la funcion searchPokemon del archivo api.js para que busque el pokemon deseado*/
    const onClick = async (evt) => {
        const data = await searchPokemon(search);
        console.log(data);
    }
 
    return (

        <div>
        <div>
          <input 
          placeholder = 'Buscar pokemos...'
          onChange={onChange}
          />  
        </div>
        <div> 
            <button onClick={onClick}>Buscar</button>
        </div>
    </div>
    )
}

export default Searchbar;