import './boton-favorito.css';
import React, {FC} from "react";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @author Francisco Gerardi
 * @returns un JSX element 
 */

type BotonFavoritoProps = {
    esFavorito: Boolean,
    onClick: React.MouseEventHandler
}



const BotonFavorito : FC<BotonFavoritoProps> = ({esFavorito, onClick} : BotonFavoritoProps) => {
  
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;