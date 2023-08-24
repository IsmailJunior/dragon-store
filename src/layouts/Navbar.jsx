import {Link} from 'react-router-dom'

export const Navbar = () => {
	return (
	<nav className="p-4 z-20 text-sm bg-slate-100/60 backdrop-blur-lg fixed w-full">
	<ul className="flex justify-between container">
			<li>
				<Link to='/'>Dragon Group</Link>
			</li>
			<li>
				<Link to='/store'>Store</Link>
			</li>
			<li>
				<a href="#">Samsung</a>
			</li>
			<li>
				<a href="#">Huawei</a>
			</li>
			<li>
				<a href="#">Xiaomi</a>
			</li>
			<li>
				<a href="#">Tecno</a>
			</li>
	</ul>
	</nav>
  )
}
