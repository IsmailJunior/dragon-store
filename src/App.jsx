import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {auth} from './config/firebase'
import { logIn, logOut, selectStatus, selectUser } from './features/user/userSlice'
import { Layout } from './layouts/Layout'
import { LandingPage } from './pages/LandingPage'
import {AuthPage} from './pages/AuthPage'
import { StorePage } from './pages/StorePage'
import { ProductPage } from './pages/ProductPage'
import { BagPage } from './pages/BagPage'
import { AdminPage } from './pages/AdminPage'
import { NewItemPage } from './pages/NewItemPage'
import {NotFoundPage} from './pages/NotFoundPage'
function App ()
{
	const user = useSelector( selectUser );
	const status = useSelector( selectStatus );
	const dispatch = useDispatch();
	useEffect( () =>
	{
		const unsubsecribe = auth.onAuthStateChanged( ( user ) =>
		{
			if ( !user ) return dispatch( logOut() );
			dispatch( logIn( {
				uid: user.uid,
			} ) )
		} )
		return unsubsecribe;
	}, [ dispatch ] )
	
	return (
		<Routes>
			<Route path='/' element={ <Layout /> }>
				<Route index element={ <LandingPage /> } />
				<Route path='store' element={ <StorePage /> } />
				<Route path='store/:product' element={ <ProductPage /> } />
				<Route path='bag' element={ <BagPage /> } />
			</Route>
			<Route path='/admin' element={<AdminPage />}>
				<Route path='new'  element={<NewItemPage />} />
			</Route>
			<Route path='/login' element={ <AuthPage /> } />
			<Route path='/*' element={ <NotFoundPage /> } />
		</Routes>
	)
}

export default App;