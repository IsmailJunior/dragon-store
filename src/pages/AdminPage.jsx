import { Link, Outlet, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { PlusIcon, UserCircleIcon } from '@heroicons/react/24/outline'
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
		{!user ? <AuthPage /> : <div className='flex gap-10'>
		<aside className="sticky top-0 w-64 h-fit bg-slate-900 block">
			<ul className="flex flex-col gap-12 items-center text-white p-4">
			<Link to='/admin/new'>
			<li className='flex items-center gap-3'>
			<PlusIcon className='w-6'/>	
				Create new item
			</li>	
			</Link>	
			<li onClick={onLogoutClickedHandler} className='flex items-center gap-3 cursor-pointer'>
			<UserCircleIcon className='w-6'/>		
					Logout
			</li>	
			</ul>
		</aside>
		<div className='py-5'>
			<Outlet />
		</div>
	</div>}
	</>
  )
}