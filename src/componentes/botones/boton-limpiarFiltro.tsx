import { ButtonHTMLAttributes, FC } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../../actions/character.action";


/**
* @author Francisco Gerardi
*
* 
*/



 const ButtonFilterClean: FC = () => {

    const dispatch = useDispatch();
    const onClick= ()=>{
    dispatch(fetchCharactersThunk(""))
    }
    return <button className= "danger" onClick={onClick}>Limpiar filtros</button>
 }

 export default ButtonFilterClean;