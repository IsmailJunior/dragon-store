import { Link } from 'react-router-dom'
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
				<Link to='/store/i'>Huawei</Link>
			</li>
			<li>
				<Link to='/store/i'>Xiaomi</Link>
			</li>
			<li>
				<Link to='/store/i'>Tecno</Link>
			</li>
	</ul>
	</nav>
  )
}
