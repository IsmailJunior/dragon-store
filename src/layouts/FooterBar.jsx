
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
							<a href="#">Samsung</a>
						</li>
						<li>
							<a href="#">Huawei</a>
						</li>
						<li>
							<a href="#">Honor</a>
						</li>
						<li>
							<a href="#">Xiaomi</a>
						</li>
						<li>
							<a href="#">Oppo</a>
						</li>
						<li>
							<a href="#">Itel</a>
						</li>
						<li>
							<a href="#">Tecno</a>
						</li>
						<li>
							<a href="#">ZTE</a>
						</li>
						<li>
							<a href="#">TCL</a>
						</li>
						<li>
							<a href="#">Vivo</a>
						</li>
						<li>
							<a href="#">Infinix</a>
						</li>
						<li>
							<a href="#">Nokia</a>
						</li>
						<li>
							<a href="#">Watchs</a>
						</li>
				</ul>	
				{/* Store */ }
				<ul>
					<li>
						<h1 className="text-black">Store</h1>	
					</li>	
					<li>
						<a href="#">Mobile Phones</a>
					</li>
					<li>
						<a href="#">Used Phones</a>
					</li>
					<li>
						<a href="#">New Phones</a>
					</li>
					<li>
						<a href="#">Watchs</a>
					</li>
				</ul>
				{/* Paymenet */}
						<ul>
						<li>
							<h1 className="text-black">Payment</h1>
						</li>
						<li>
							<a href="#">Zain Cash</a>
						</li>
						<li>
							<a href="#">Asiacell</a>
						</li>
						<li>
							<a href="#">Visa</a>
						</li>
						<li>
							<a href="#">Cash</a>
						</li>
				</ul>
				{/* Contact */ }
				<ul>
					<li>
						<h1 className="text-black">Contact</h1>
					</li>	
					<li>
						<a href="#">Via Number</a>
					</li>
					<li>
						<a href="#">Via Email</a>
					</li>
				</ul>
				{/* Hiring */ }
				<ul>
					<li>
						<h1 className="text-black">Hiring</h1>	
					</li>	
					<li>
						<a href="#">Designer</a>	
					</li>
					<li>
						<a href="#">Sales Manger</a>	
					</li>
					<li>
						<a href="#">Online Marketer</a>	
					</li>
				</ul>
				{/* About us */}
				<ul>
					<li>
						<h1 className="text-black">About us</h1>
					</li>
					<li>
						<a href="#">Career Opportunities</a>
					</li>
					<li>
						<a href="#">News Room</a>
					</li>
				</ul>
			</section>
			<hr className="my-5" />
			<section>
				<div className="flex gap-20">
					<p>Copyright © 2023 Dragon Group. All rights reserved.</p>
					<div className="text-gray-600">
						<a href="#">Privacy Policy</a>
						<span className="mx-3">|</span>
						<a href="#">Terms of Use</a>
						<span className="mx-3">|</span>
						<a href="#">Sales and Refunds</a>
						<span className="mx-3">|</span>
						<a href="#">Site Map</a>
					</div>
				</div>	
			</section>
		</div>
	</footer>
  )
}
