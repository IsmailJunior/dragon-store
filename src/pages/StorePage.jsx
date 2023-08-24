import {Category} from '../components/Category'
export const StorePage = () => {
  return (
	<div className='container py-10'>
		<section className='flex'>
		<Category/>
		<Category/>	
		<Category />
		<Category />
		<Category />
		</section>
	</div>
  )
}
