import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {getItems,getStore,getLanding} from './features/items/itemsSlice'
import store from './app/store'
import App from './App.jsx'
import './index.css'
store.dispatch( getItems() );
store.dispatch( getStore() );
store.dispatch( getLanding() );
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <Provider store={store}>
    <Router>
        <Routes>
            <Route path='/*' element={ <App /> } />
        </Routes>
        </Router>
     </Provider>
)
