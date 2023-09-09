import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {getItems,getFeatured,getStore} from './features/items/itemsSlice'
import store from './app/store'
import App from './App.jsx'
import './index.css'
store.dispatch( getItems() );
store.dispatch( getFeatured() );
store.dispatch( getStore() );
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <Provider store={store}>
    <Router>
        <Routes>
            <Route path='/*' element={ <App /> } />
        </Routes>
        </Router>
     </Provider>
)
