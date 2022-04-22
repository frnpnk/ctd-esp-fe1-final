import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../../actions/character.action';
import { useSelector } from '../../store/store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

/*
const GrillaPersonajes: FC = () => {

    return <div className="grilla-personajes">
       <TarjetaPersonaje />
    </div>
}
 
export default GrillaPersonajes;
*/


const GrillaPersonajes: FC = () => {
  const dispatch =useDispatch();

  const { characters, status } = useSelector((state) => state.characters);
  useEffect(() =>{
    dispatch(fetchCharactersThunk(""))
  },[])
    
    if (status === "LOADING") return <div>Cargando ...</div>;
    if (status === "FAILED") return <div>Error al cargar los personajes.</div>;
    if (!characters || characters.length === 0) return <></>;
    return (
      <div className="grilla-personajes">
          {characters.map((Character) => {
        return (
          <TarjetaPersonaje
          key={"character_" + Character.name}
          CharacterInfo={Character}
        />
        )})});
      </div>
    );
  };
  

  export default GrillaPersonajes;