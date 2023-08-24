import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import {FooterBar} from './FooterBar'

export const Layout = () => {
  return (
	<>
		<Navbar />
		<div className='h-14'></div>
		<Outlet />
		<FooterBar />
	</>
  )
}
