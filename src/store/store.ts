import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from 'redux-thunk'
import charactersReducer  from "../reducers/characters.reducer";

/**
* @author Francisco Gerardi
*/


const rootReducer = combineReducers({
      characters : charactersReducer,})

export type IRootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector// Tipamos el hook useSelector

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))) // Aqui aplicaremos los middlewares