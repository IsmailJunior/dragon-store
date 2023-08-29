import { Link } from 'react-router-dom'
import {ShoppingBagIcon} from '@heroicons/react/24/outline'
import dragon from '../assets/dragon.png'

export const Navbar = () => {
	return (
	<nav className="p-4 z-20 text-sm bg-slate-100/60 backdrop-blur-lg fixed w-full">
	<ul className="flex justify-between container">
			<li>
				<Link to='/'>
					<img width={30} src={dragon} alt="logo" />	
				</Link>
			</li>
			<li>
				<Link to='/store'>Store</Link>
			</li>
			<li>
				<Link to='/store/i'>Samsung</Link>
			</li>
			<li>
				<Link to='/store/a'>Huawei</Link>
			</li>
			<li>
				<Link to='/store/0'>Xiaomi</Link>
			</li>
			<li>
				<Link to='/store/2'>Tecno</Link>
			</li>
			<li>
				<Link to='/bag'>
						<ShoppingBagIcon className='w-6 h-6' />
				</Link>
			</li>
	</ul>
	</nav>
  )
}
