import { FC} from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import './grilla-personajes.componente';
import CharacterType from '../../types/character.types';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import {addToFav, remToFav} from '../../actions/character.action'


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * /**
* @author Francisco Gerardi
* @param {CharacterType} input character
* @returns JSX element
*/

 interface charProps{ CharacterInfo: CharacterType}
 


const TarjetaPersonaje: FC<charProps> = ({CharacterInfo}) => {

    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.characters.favs);

    let favorite = favorites.some((favorite)=>favorite.id === CharacterInfo.id)
     
    const toggleFav=()=>{
        if(!favorite){
        dispatch(addToFav(CharacterInfo))
        }else{
        dispatch(remToFav(CharacterInfo));
        }
    }

    return(
    <>
        <div className="tarjeta-personaje">
            <img src={CharacterInfo.image} alt="Rick Sanchez"/>
            <div className="tarjeta-personaje-body">
                <span>{CharacterInfo.name}</span>
                <BotonFavorito esFavorito={favorite} onClick={toggleFav} />
            </div>
      </div>
    </>
    )
}

export default TarjetaPersonaje;

