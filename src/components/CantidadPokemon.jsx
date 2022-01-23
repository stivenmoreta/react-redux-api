import React, {Component} from "react";
import { connect } from 'react-redux';

class CantidadPokemon extends Component{
    render(){
        return(
            <React.Fragment>
                Unidades: {this.props.game_shop.pokemon}
            </React.Fragment>
        )
    }
}
/*
    internamente redux enlaza el state del parametro al store
    -creamos la funcionn que devuelve las props que el componente usara
 */
const mapStateToProps = (state) =>{
    return{
        game_shop: state.game_shop
    }
}
//pasamos la funcion, luego el objeto que devuleve se podra usar en el componente
export default connect(mapStateToProps)(CantidadPokemon);