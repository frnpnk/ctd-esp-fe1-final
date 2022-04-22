import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { cleanFav } from "../actions/character.action";
import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { FC } from "react";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * /**
 * @author Francisco Gerardi
 * @returns la pagina de favoritos
 */
const PaginaFavoritos : FC = () => {

    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.characters.favs);

    const onclik = () => {
        dispatch(cleanFav());
    }

    
    return  <div className="container">
                 <div className="actions">
                      <h3>Personajes Favoritos</h3>
                      <button className="danger" onClick={onclik}>Eliminar Todos</button>
                </div>

            <div className="grilla-personajes">
                   {favorites.map((favorite) => {
                     return (
                            <TarjetaPersonaje
                           key={"character_" + favorite.name}
                           CharacterInfo={favorite}
                           />)
                        }
                    )
                 }
            </div>
      </div>
    }


export default PaginaFavoritos



