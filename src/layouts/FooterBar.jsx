import {Link} from 'react-router-dom'
export const FooterBar = () => {
  return (
	<footer className="bg-slate-100 text-gray-500 p-4">
		<div className="container">
			<section>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet numquam quis! Sint adipisci rerum temporibus! Doloremque ab exercitationem officiis ut incidunt dolor at, ullam quae unde odio repudiandae rem!</p>	  
			</section>
			<hr className="my-5" />
			<section className="flex justify-between">
				{/* Catagories	 */}
					<ul>
						<li>
							<h1 className="text-black">Catagories</h1>
						</li>
						<li>
							<Link to='/store/o'>Samsung</Link>
						</li>
						<li>
							<Link to='/store/s'>Huawei</Link>
						</li>
						<li>
							<Link to='/store/d'>Honor</Link>
						</li>
						<li>
							<Link to='/store/g'>Xiaomi</Link>
						</li>
						<li>
							<Link to='/store/v'>Oppo</Link>
						</li>
						<li>
							<Link to='/store/w'>Itel</Link>
						</li>
						<li>
							<Link to='/store/q'>Tecno</Link>
						</li>
						<li>
							<Link to='/store/a'>ZTE</Link>
						</li>
						<li>
							<Link to='/store/s'>TCL</Link>
						</li>
						<li>
							<Link to='/store/u'>Vivo</Link>
						</li>
						<li>
							<Link to='/store/p'>Infinix</Link>
						</li>
						<li>
							<Link to='/store/z'>Nokia</Link>
						</li>
						<li>
							<Link to='/store/a'>Watchs</Link>
						</li>
				</ul>	
				{/* Store */ }
				<ul>
					<li>
						<h1 className="text-black">Store</h1>	
					</li>	
					<li>
						<Link to='/store/2'>Mobile Phones</Link>
					</li>
					<li>
						<Link to='/store/1'>Used Phones</Link>
					</li>
					<li>
						<Link to='/store/5'>New Phones</Link>
					</li>
					<li>
						<Link to='/store/2'>Watchs</Link>
					</li>
				</ul>
				{/* Paymenet */}
						<ul>
						<li>
							<h1 className="text-black">Payment</h1>
						</li>
						<li>
							<Link to='/store/7'>Zain Cash</Link>
						</li>
						<li>
							<Link to='/store/6'>Asiacell</Link>
						</li>
						<li>
							<Link to='/store/5'>Visa</Link>
						</li>
						<li>
							<Link to='/store/4'>Cash</Link>
						</li>
				</ul>
				{/* Contact */ }
				<ul>
					<li>
						<h1 className="text-black">Contact</h1>
					</li>	
					<li>
						<Link to='/store/d'>Via Number</Link>
					</li>
					<li>
						<Link to='/store/d'>Via Email</Link>
					</li>
				</ul>
				{/* Hiring */ }
				<ul>
					<li>
						<h1 className="text-black">Hiring</h1>	
					</li>	
					<li>
						<Link to='/store/3'>Designer</Link>	
					</li>
					<li>
						<Link to='/store/2'>Sales Manger</Link>	
					</li>
					<li>
						<Link to='/store/0'>Online Marketer</Link>	
					</li>
				</ul>
				{/* About us */}
				<ul>
					<li>
						<h1 className="text-black">About us</h1>
					</li>
					<li>
						<Link to='/store/6'>Career Opportunities</Link>
					</li>
					<li>
						<Link to='/store/0'>News Room</Link>
					</li>
				</ul>
			</section>
			<hr className="my-5" />
			<section>
				<div className="flex gap-20">
					<p>Copyright © 2023 Dragon Group. All rights reserved.</p>
					<div className="text-gray-600">
						<Link to='/store/s'>Privacy Policy</Link>
						<span className="mx-3">|</span>
						<Link to='/store/s'>Terms of Use</Link>
						<span className="mx-3">|</span>
						<Link to='/store/s'>Sales and Refunds</Link>
						<span className="mx-3">|</span>
						<Link to='/store/s'>Site Map</Link>
					</div>
				</div>	
			</section>
		</div>
	</footer>
  )
}
