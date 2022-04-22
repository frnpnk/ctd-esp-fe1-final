import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import ButtonFilterClean from "../componentes/botones/boton-limpiarFiltro";
import { FC } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */


 const PaginaInicio = () => {


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <ButtonFilterClean />
            
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio