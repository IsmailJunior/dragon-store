import { Link, Outlet, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { PlusIcon, UserCircleIcon ,HomeIcon} from '@heroicons/react/24/outline'
import { logOut, selectStatus, selectUser } from '../features/user/userSlice'
import {AuthPage} from '../pages/AuthPage'
export const AdminPage = () =>
{
	
	localStorage.setItem( 'firstStageForm', 'true' );
	const user = useSelector( selectUser );
	const status = useSelector( selectStatus );
	const navigate = useNavigate();
	const dispatch = useDispatch();	
	const onLogoutClickedHandler = () =>
	{
		dispatch( logOut());
		navigate('/login')
	}

  return (
	<>
		{!user ? <AuthPage /> : <div className='flex'>
		<aside className="sticky z-30 top-0 w-64 h-screen bg-slate-900 block">
			<ul className="flex flex-col gap-12 items-center text-white p-4">
			<Link to='/admin/new'>
			<li className='w-42 flex items-center gap-3'>
			<PlusIcon className='w-6'/>	
				Create new item
			</li>	
			</Link>	
			<li onClick={onLogoutClickedHandler} className='w-36 flex items-center gap-3 cursor-pointer'>
			<UserCircleIcon className='w-6'/>		
					Logout
			</li>	
			<Link to='/admin/landing'>
			<li className='w-36 flex items-center gap-3 cursor-pointer'>
			<HomeIcon className='w-6'/>		
				Landing Page
			</li>			
			</Link>	
			</ul>
		</aside>
		<div className='w-full py-5'>
			<Outlet />
		</div>
	</div>}
	</>
  )
}