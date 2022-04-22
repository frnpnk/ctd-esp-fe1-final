import { Reducer } from "@reduxjs/toolkit";
import { characterActions } from "../actions/character.action";
import Character from "../types/character.types";


/**
* @author Francisco Gerardi
* 
* 
*/

interface StateOfCharacter {
    status: "IDLE"|"LOADING"|"COMPLETED"|"FAILED"
    characters: Character[];
    favs: Character[]
    errorMsj: string | null
}

const initialState: StateOfCharacter = {
    status: "IDLE",
    characters: [],
    favs: [],
    errorMsj:null

}

const charactersReducer: Reducer<StateOfCharacter, characterActions> = ( 
    state = initialState, action):StateOfCharacter =>{
        switch(action.type){
            case "FETCH_CHARACTER_PENDING":
                return{
                    ...state,
                     status:"LOADING",
                     characters: [],
                     errorMsj:null
                }
            case "FETCH_CHARACTER_SUCCES":
                return{
                    ...state,
                    status: "COMPLETED",
                    characters: action.characters
                }
            case "FETCH_CHARACTER_FAILED":
                return{
                    ...state,
                     status: "FAILED",
                    errorMsj:action.error
                }
            case "ADD_TO_FAV":
                return{
                    ...state,
                    favs: [...state.favs, action.character]
                }
         
            case "REM_TO_FAV":
                return{
                    ...state,
                    favs: state.favs.filter(favs => favs.id !== action.character.id)
                }

             case "CLEAN_FAV":
                 return {
                    ...state,
                    favs: []
                    }
            default:
                return {...state}
        }
}

export default charactersReducer;