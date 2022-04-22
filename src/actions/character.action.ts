import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { characterFilterAPI } from "../service/apiConnect";
import { IRootState } from "../store/store";
import CharacterType from "../types/character.types";




interface fetchCharacterPendingAction extends Action{
    type: "FETCH_CHARACTER_PENDING",
    query: string,
}
interface fetchCharacterSuccesAction extends Action{
    type: "FETCH_CHARACTER_SUCCES",
    characters: CharacterType[]
}
interface fetchCharacterFailedAction extends Action{
    type: "FETCH_CHARACTER_FAILED",
    error: string,
}
interface fetchCharacterthunkAction extends ThunkAction<void, IRootState, unknown, characterActions>{};


const fetchCharacterPending: ActionCreator<fetchCharacterPendingAction> = (query: string ) =>{
    return{
        type: "FETCH_CHARACTER_PENDING",
        query: query
    }
}

const fetchCharacterSucces: ActionCreator<fetchCharacterSuccesAction> = (characterArray: CharacterType[] ) =>{
    return{
        type: "FETCH_CHARACTER_SUCCES",
        characters: characterArray
    }
}

const fetchCharacterFailed: ActionCreator<fetchCharacterFailedAction> = (error: string ) =>{
    return{
        type: "FETCH_CHARACTER_FAILED",
        error : error
    }
}



export const fetchCharactersThunk = (query : string) : fetchCharacterthunkAction =>{
    return async(dispatch, getState) =>{
        dispatch(fetchCharacterPending(query));
            try{
            const characters: CharacterType[]= await characterFilterAPI(query);
            dispatch(fetchCharacterSucces(characters))
            }catch(e){
            dispatch(fetchCharacterFailed(e))
        }
    }

}


export type characterActions = 
ReturnType<typeof fetchCharacterSucces>
|ReturnType<typeof fetchCharacterPending>
|ReturnType<typeof fetchCharacterFailed>;



//*TODO action thunk para episodios
/*

export type AddCharToFavtype ={
    type : "ADD_TO_FAV"
    payload: {character:Character}
}

interface filterCharacterAction extends Action{
    type: "CHARACTER_FILTER",
    name: string,
}


export const filterCharacter: ActionCreator<filterCharacterAction> = (name: string ) =>{
    return{
        type: "CHARACTER_FILTER",
        name:name
    }

}

export const AddCharToFav = (character:Character) : AddCharToFavtype=>{
    return{
        type: "ADD_TO_FAV",
        payload: {character:character}
    }

}





export type characterActions = 
ReturnType<typeof filterCharacter>
|ReturnType<typeof AddCharToFav>
//|ReturnType<typeof filterClean>
*/