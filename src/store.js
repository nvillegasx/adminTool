import{createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducers/RootReducer'

const initialState= {};

const storeEnhancers = compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


//  function rootReducer(state =initialState,action){

  //  }

const store= createStore(rootReducer,initialState,storeEnhancers);


export default store;




