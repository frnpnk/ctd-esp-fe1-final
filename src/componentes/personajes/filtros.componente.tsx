import './filtros.css';
import { ChangeEvent, FC } from 'react';
import { useDispatch} from 'react-redux';
import { fetchCharactersThunk } from '../../actions/character.action';
/**
* @author Francisco Gerardi
* @param {String} input query
* @returns {any[]} Array de personaje
*/



const Filtros: FC  = () => {


        const dispatch =useDispatch();
        const onChange = async (e:ChangeEvent<HTMLInputElement>)=>{
            const query =e.target.value;
            dispatch(fetchCharactersThunk(query))
        }
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input 
            type="text" 
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nombre" 
            onChange={onChange}
            
        />
    </div>
}

export default Filtros;