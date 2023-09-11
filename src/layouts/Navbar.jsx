import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {ShoppingBagIcon} from '@heroicons/react/24/outline'
import dragon from '../assets/dragon.png'
export const Navbar = () =>
{
	const cart = JSON.parse( localStorage.getItem( 'guest' ) );
	const [ cartItems, setCartItems ] = useState(0);
	useEffect( () =>
	{
		setCartItems(cart?.cart?.length)
	}, [cart?.cart?.length])
return (
<nav className="p-4 z-20 text-sm bg-slate-100/60 backdrop-blur-lg fixed w-full">
	<ul className="flex justify-between container">
		<li>
			<Link to='/'>
			<img width={30} src={dragon} alt="logo" />	
			</Link>
		</li>
		<li>
			<Link to='/store'>
			Store</Link>
		</li>
		<li>
			<Link to='/store/i'>
			Samsung</Link>
		</li>
		<li>
			<Link to='/store/a'>
			Huawei</Link>
		</li>
		<li>
			<Link to='/store/0'>
			Xiaomi</Link>
		</li>
		<li>
			<Link to='/store/2'>
			Tecno</Link>
		</li>
		<li>
			<Link className=' relative' to='/bag'>
			<ShoppingBagIcon className='w-6 h-6' />
				{isFinite(cartItems) && cartItems != 0 ? <span className='absolute left-4 top-2 bg-black w-5 h-5 text-white text-center rounded-full'>{cartItems}</span> : null}
			</Link>
		</li>
	</ul>
</nav>
)
}