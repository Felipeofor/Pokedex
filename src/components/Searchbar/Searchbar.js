import React from 'react';
import {searchPokemon} from '../../api';
/*Le avisamos a React que renderice con cada cambio de estado*/
const {useState} = React; 


/*BUSCADOR DE POKEMON*/


const Searchbar = (props) => {

    /*Ingreso el valor inicial del search*/
    const {onSearch} = props;
    const [search,setSearch] = useState('');

    const onChange = (evt) => {
        /*Actualizamos el DOM con cada cambio que ingrese el usuario*/
        setSearch(evt.target.value);
        if (evt.target.value.lenght === 0) {
           onSearch(null);
       }
    };
    /*Cuando presionemos el boton llamaremos a la funcion searchPokemon del archivo api.js para que busque el pokemon deseado*/
    const onClick = async (evt) => {
        onSearch(search);
    }
 
    return (

        <div className="searchbar-conteiner">
        <div className="searchbar">
          <input 
          placeholder = 'Buscar pokemon...'
          onChange={onChange}/>  
        </div>
        <div className="searchbar-btn"> 
            <button onClick={onClick}>Buscar</button>
        </div>     
    </div>
    );
};

export default Searchbar;