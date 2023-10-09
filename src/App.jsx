import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import {auth} from './config/firebase'
import { logIn, logOut} from './features/user/userSlice'
import { Layout } from './layouts/Layout'
import { LandingPage } from './pages/LandingPage'
import {AuthPage} from './pages/AuthPage'
import { StorePage } from './pages/StorePage'
import { ProductPage } from './pages/ProductPage'
import { BagPage } from './pages/BagPage'
import { AdminPage } from './pages/AdminPage'
import { NewItemPage } from './pages/NewItemPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { HuaweiPage } from './pages/HuaweiPage'
import { SamsungPage } from './pages/SamsungPage'
import { XiaomiPage } from './pages/XiaomiPage'
import {TecnoPage} from './pages/TecnoPage'
import { LandingPageAdmin } from './components/admin/LandingPageAdmin'
import { StorePageAdmin } from './components/admin/StorePageAdmin'
import { AllItemsAdmin } from './components/admin/AllItemsAdmin'
import { EditBannerPageAdmin } from './components/admin/EditBannerPageAdmin'
import { NewStoreSectionPage } from './pages/NewStoreSectionPage'
import { EditBlockPageAdmin } from './components/admin/EditBlockPageAdmin'
function App ()
{
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
				<Route path='/huawei' element={ <HuaweiPage /> } />
				<Route path='/samsung' element={ <SamsungPage /> } />
				<Route path='/xiaomi' element={ <XiaomiPage /> } />
				<Route path='/tecno' element={<TecnoPage />} />
				<Route path='store' element={ <StorePage /> } />
				<Route path='store/:product' element={ <ProductPage /> } />
				<Route path='bag' element={ <BagPage /> } />
			</Route>
			<Route path='/admin' element={<AdminPage />}>
				<Route index element={ <NewItemPage /> } />
				<Route path='landing' element={ <LandingPageAdmin /> } />
				<Route path='store' element={ <StorePageAdmin /> } />
				<Route path='items' element={ <AllItemsAdmin /> } />
				<Route path='edit-banner/:banner' element={ <EditBannerPageAdmin /> } />
				<Route path='edit-block/:group/:block/:side' element={<EditBlockPageAdmin />} />
				<Route path='new-section' element={<NewStoreSectionPage/>} />
			</Route>
			<Route path='/login' element={ <AuthPage /> } />
			<Route path='/*' element={ <NotFoundPage /> } />
		</Routes>
	)
}

export default App;