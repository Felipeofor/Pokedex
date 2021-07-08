import React from 'react';

const Searchbar = () => {

    let search ='Pikachu';
    const onChange = (evt) => {
        console.log(evt.target.value);
        search = evt.target.value;
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
            {search}
        </div>
    </div>
    )
}

export default Searchbar;