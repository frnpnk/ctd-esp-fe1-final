import { FC} from 'react';
import Character from '../../types/character.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import './grilla-personajes.componente';
import CharacterType from '../../types/character.types';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 
 */
 interface charProps{
    CharacterInfo: CharacterType
 }
 
const TarjetaPersonaje: FC<charProps> = ({CharacterInfo}) => {

    return(
    <>
        <div className="tarjeta-personaje">
            <img src={CharacterInfo.image} alt="Rick Sanchez"/>
            <div className="tarjeta-personaje-body">
                <span>{CharacterInfo.name}</span>
                <BotonFavorito esFavorito={false} onClick={undefined} />
            </div>
      </div>
    </>
    )
}

export default TarjetaPersonaje;