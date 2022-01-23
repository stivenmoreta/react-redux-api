import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));
//composewithdevtools sirve para depurar 
//en produccion se quita,
export default store;