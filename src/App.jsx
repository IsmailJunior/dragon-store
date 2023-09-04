import { Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { LandingPage } from './pages/LandingPage'
import { StorePage } from './pages/StorePage'
import { ProductPage } from './pages/ProductPage'
import { BagPage } from './pages/BagPage'
import { AdminPage } from './pages/AdminPage'
import {NewItemPage} from './pages/NewItemPage'
function App ()
{
	return (
		<Routes>
			<Route path='/' element={ <Layout /> }>
				<Route index element={ <LandingPage /> } />
				<Route path='store' element={ <StorePage /> } />
				<Route path='store/:product' element={ <ProductPage /> } />
				<Route path='bag' element={ <BagPage /> } />
			</Route>
			<Route path='/admin' element={ <AdminPage /> }>
				<Route path='new'  element={<NewItemPage />} />
			</Route>
		</Routes>
	)
}

export default App;