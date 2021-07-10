//Importamos los componentes
import React from 'react';
import { LeftArrow, RightArrow } from '../ArrowsSvg/ArrowsSvg';

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;
    //Botones para cambiar la pagina
    return (
        <div className="pagination">
            <button className="pagination-btn" onClick = {onLeftClick}><div className="icon"><LeftArrow/></div></button>
            <div>{page} de {totalPages}</div>
            <button className="pagination-btn" onClick = {onRightClick}><div className="icon"><RightArrow/></div></button>
        </div>
    )
}

export default Pagination;