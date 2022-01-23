import axios from "axios";
//no se encierra en parentesis

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

//payload = carga util
//ACTIONS
export const fetchPokemonRequest = ()=>{
    return{
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon)=>{
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

/**
 * 
 * @param {error} error se ingresa el mensaje de error que desee
 * @returns si la consulta falla o no encuentra el pokemon devuelve un error
 */
export const fetchPokemonFailure = (error) =>{
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}



//Los 3 creadores de accion van envueltas en un gran creador de accion.
//Aca se van ejecutando las acciones con los dispatch que recibira el reducer
/**
 * 
 * @param valor es el nombre del pokemon que buscamos
 * @returns {} devuelve el resultado de la consulta a la api
 * mediante los creadores de accion
 */
const fetchPokemon = (valor) =>{
    //funcion currificada, funcion que devuelve otra funcion
    return (dispatch) =>{
        //aviso al store de que se realizara una consulta a la api
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response =>{
                //aca se ejecuta la consulta no en el buscadorReduce
                //en caso de exito se guarda la data en el payload
                dispatch(fetchPokemonSuccess([response.data]));
            })
            .catch(error =>{
                //en caso de error
                dispatch(fetchPokemonFailure('No se encontro el pokemon'))
            });
    }
}

export default fetchPokemon;