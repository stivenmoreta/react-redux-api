import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/CompraPokemon';
import store from './redux/store'
import {Provider} from 'react-redux';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';



function App() {

  console.log(store.getState());

  return (
    <Provider store={store}>
      <div className="App">
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{maxWidth: '370px'}}>
              <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={require('./img/raiku.gif')} className="card-img" alt='pokemon'/>
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <CantidadPokemon/>
                    </div>
                    <ComprarPokemon/>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='col-12 mt-4 border-top pt-3'>
            <BuscadorPokemon/>
          </div>
          <div className='col-12 '>
            <ResultadoPokemon/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
