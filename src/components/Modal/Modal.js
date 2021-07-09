import React, { useRef } from "react";
import ReactDom from "react-dom";
import Pokemon from '../Pokemon';
import { searchPokemon } from '../../api';
export const Modal = ({ setShowModal, elements}) => {
  console.log(elements)
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="description">
          <div><img src={elements.pokemon.sprites.front_default} alt={elements.pokemon.name} /></div>
         <div>Nombre: {elements.pokemon.name}</div> 
         <div>Peso: {elements.pokemon.weight}</div>
         <div>Altura: {elements.pokemon.height}</div>
         <div>Experiencia: {elements.pokemon.base_experience}</div> 
          {elements.pokemon.types.map(({type}) => {
           return <div>Tipo: {type.name}</div>
           })
         }
         </div> 
      </div>
      </div>
    ,document.getElementById("portal")
  );
};
console.log();
export default Modal;