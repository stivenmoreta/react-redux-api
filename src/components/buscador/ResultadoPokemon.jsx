import React from "react";
import { useSelector } from "react-redux";

//https://www.youtube.com/watch?v=ZUKg2rXqP8w
//los hoocks remplazaron el connect, ver la nueva tecnologia
/*
    useSelector
    ayuda a extraer informacion del state de la store de redux, es decir.
    sustituye el mapStateToProps; argumento de connect. El selector es llamado
    cada que el Hook sea actualizado
*/
const ResultadoPokemon = () =>{
    //el buscador es el state de la funcion buscador de buscadorReducer
    const buscador = useSelector((state)=> state.buscador);
    return(
        <div>
            <h3 className="text-white">Resultado:</h3>

            {/*Si buscador.loading es true muestra el div*/}
            {buscador.loading && <div className="text-warning">Buscando...</div>}

            {/*Si buscador.pokemon.length cumple la condicion quiere decir que trae informacion*/}
            {buscador.pokemon.length >=1 && <div className="text-success">
                <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />
                <span>{buscador.pokemon[0].name}</span>
            </div>}

            {/*Si buscador.error cumple la condicion quiere decir que hay un mensaje de error*/}
            {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
        </div>
    );
}

export default ResultadoPokemon;