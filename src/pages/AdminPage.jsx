import {Link, Outlet} from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/outline'

export const AdminPage = () =>
{
localStorage.setItem( 'firstStageForm', 'true' );
  return (
	<div className='flex gap-10'>
		<aside className="sticky top-0 w-64 h-fit bg-slate-900 block">
			<ul className="flex flex-col gap-12 items-center text-white p-4">
			<Link to='/admin/new'>
			<li className='flex items-center gap-3'>
			<PlusIcon className='w-6'/>	
				Create new item
			</li>	
			</Link>	
			</ul>
		</aside>
		<div className='py-5'>
			<Outlet />
		</div>
	</div>
  )
}