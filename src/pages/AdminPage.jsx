import { Link, Outlet, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { PlusIcon, UserCircleIcon ,HomeIcon, BuildingStorefrontIcon, Square3Stack3DIcon} from '@heroicons/react/24/outline'
import { logOut, selectStatus, selectUser } from '../features/user/userSlice'
import {deleteItem} from '../features/items/itemsSlice'
import { Oval } from "react-loader-spinner";
import {AuthPage} from '../pages/AuthPage'
export const AdminPage = () =>
{

	const firstStageForm = localStorage.getItem( 'firstStageForm' );
	const secondStageForm = localStorage.getItem( 'secondStageForm' );
	const thirdStageForm = localStorage.getItem( 'thirdStageForm' );
	const fourthStageForm = localStorage.getItem( 'fourthStageForm' );
	const fifthStageForm = localStorage.getItem( 'fifthStageForm' );
	const sixthStageForm = localStorage.getItem( 'sixthStageForm' );
	const models = localStorage.getItem( 'models' );
	const colors = localStorage.getItem( 'colors' );
	const storages = localStorage.getItem( 'storages' );
	const images = localStorage.getItem( 'images' );
	const stages = [ firstStageForm, secondStageForm, thirdStageForm, fourthStageForm, fifthStageForm, sixthStageForm, models, colors, storages, images ];
	const user = useSelector( selectUser );
	const status = useSelector( selectStatus );
	const navigate = useNavigate();
	const dispatch = useDispatch();	
	const onLogoutClickedHandler = () =>
	{
		dispatch( logOut());
		navigate('/login')
	}

	if ( stages.includes(null))
	{
	localStorage.setItem('firstStageForm', 'true')
    localStorage.setItem('secondStageForm', 'false')
	localStorage.setItem( 'thirdStageForm', 'false' )
	localStorage.setItem('fourthStageForm', 'false')
    localStorage.setItem('fifthStageForm', 'false')
    localStorage.setItem('sixthStageForm', 'false')
    localStorage.setItem('models', 'false')
    localStorage.setItem('colors', 'false')
    localStorage.setItem('images', 'false')
    localStorage.setItem('images', 'false')
    localStorage.setItem( 'storages', 'false' )
	localStorage.removeItem( 'itemId' )	
	dispatch( deleteItem() );
	if ( status === 'success' )
	{
		window.location.reload()		
	}
	}

  return (
	<>
		{status !== 'success' ? <div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
		</div> : !user ? <AuthPage /> : <div className='flex'>
		<aside className="sticky z-30 top-0 w-64 h-screen shadow-lg bg-white border block">
			<ul className="flex flex-col gap-12 items-center p-4 py-10">
			<Link to='/admin'>
			<li className='w-42 font-semibold flex items-center gap-3 hover:text-slate-400'>
			<PlusIcon className='w-6'/>	
				Create new item
			</li>	
			</Link>		
			<Link to='/admin/landing'>
			<li className='w-36 font-semibold flex items-center gap-3 cursor-pointer hover:text-slate-400'>
			<HomeIcon className='w-6'/>		
				Landing Page
			</li>			
			</Link>	
			<Link to='/admin/store'>
			<li className='w-36 flex font-semibold items-center gap-3 cursor-pointer hover:text-slate-400'>
			<BuildingStorefrontIcon className='w-6'/>		
				Store Page
			</li>			
			</Link>	
			<Link to='/admin/items'>
			<li className='w-36 flex font-semibold items-center gap-3 cursor-pointer hover:text-slate-400'>
			<Square3Stack3DIcon className='w-6'/>		
				All Items
			</li>			
			</Link>	
			<li onClick={onLogoutClickedHandler} className='w-36 flex font-semibold items-center gap-3 cursor-pointer hover:text-slate-400'>
			<UserCircleIcon className='w-6'/>		
					Logout
			</li>
			</ul>
		</aside>
		<div className='w-full py-5'>
			<Outlet />
		</div>
	</div>}
	</>
  )
};