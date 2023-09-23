import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Bar.module.css';
import {ShoppingBagIcon} from '@heroicons/react/24/outline'
import dragon from '../assets/dragon.png'
export const Navbar = () =>
{
	const cart = JSON.parse( localStorage.getItem( 'guest' ) );
	const [ cartItems, setCartItems ] = useState( 0 );
	const [ showBar, setShowBar ] = useState( false )
	
	const onBarClicked = () =>
	{
		if ( showBar === false )
		{
			setShowBar(true)
		} else
		{
			setShowBar(false)
		}
	}
	useEffect( () =>
	{
		setCartItems(cart?.cart?.length)
	}, [ cart?.cart?.length ] )
	
	const onLinkClicked = ( path ) =>
	{
		window.location.replace(`/${path}`)
	}
return (
	<nav className="z-20 text-sm bg-slate-100/60 backdrop-blur-lg fixed w-full">

	<ul className="p-4 hidden lg:flex justify-between container">
		<li>
			<Link to='/'>
			<img width={30} src={dragon} alt="logo" />	
			</Link>
		</li>
		<li>
			<Link to='/store'>
			المتجر</Link>
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
	<ul className="p-4 flex lg:hidden justify-between">
		<li>
			<Link to='/'>
			<img width={30} src={dragon} alt="logo" />	
			</Link>
			</li>
		<li className='flex gap-10'>
			<Link className='relative' to='/bag'>
			<ShoppingBagIcon className='w-6 h-6' />
				{isFinite(cartItems) && cartItems != 0 ? <span className='absolute left-4 top-2 bg-black w-5 h-5 text-white text-center rounded-full'>{cartItems}</span> : null}
				</Link>
		<div onClick={onBarClicked} className={classes.bar}>
		<div className={showBar ? classes.rotateTopStake : classes.topStake}></div>			
		<div className={showBar ? classes.rotateBottomStake : classes.bottomStake}></div>			
		</div>
		</li>
		</ul>
		<div className={showBar ? 'h-120 transition-all duration-300 overfow-hidden bg-white-50 my-8 mx-10 lg:hidden' : 'h-0 overflow-hidden transition-all duration-300 bg-white-50 mx-10'}>
			<ul className='space-y-7 text-3xl font-semibold'>
				<li onClick={() => onLinkClicked('')}>
					Home
				</li>
				<li onClick={() => onLinkClicked('store')}>
					Store
				</li>
				<li onClick={() => onLinkClicked('bag')}>
					Bag
				</li>
			</ul>	
		</div>
</nav>
)
}