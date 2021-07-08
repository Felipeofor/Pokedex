import React, { useRef } from "react";
import ReactDom from "react-dom";
import Pokemon from '../Pokemon';
import { searchPokemon } from '../../api';


export const Modal = ({ setShowModal, elements}) => {
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
          
         <div>{}</div>
    </div></div>
    ,document.getElementById("portal")
  );
};
console.log();
export default Modal;