import {createStore} from 'redux'
import appReducer from  './reducers'
import {searchTodo} from  './actions'


const store = createStore(appReducer, /* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
