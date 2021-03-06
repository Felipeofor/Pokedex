//Importamos los componentes
import React, { useRef } from "react";
import ReactDom from "react-dom";


export const Modal = ({ setShowModal, elements}) => {
  console.log(elements)
  // Cerrramos el modal cuando hacemos click fuera de el
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  /*Imagen y caracteristicas del pokemon dentro del modal */
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