import {PrimaryButton} from '../components/PrimaryButton'
export const BagPage = () => {
  return (
	<div className="flex flex-col gap-8 items-center container mt-7 mb-7">
		<h1 className='text-3xl font-semibold'>Your Total is: </h1>
		<p>Very very long descriptive detail</p>
		<PrimaryButton title='Check Out'/>
		<div className='flex flex-row gap-10'>
			<img src="https://static.thenounproject.com/png/1269202-200.png" />
			<div className='flex flex-col gap-5'>
				<h1 className='text-3xl font-semibold'>Product Name</h1>
				<p className='font-semibold'>Storage:</p>
				<p className='font-semibold'>Color:</p>
				<p className='font-semibold'>Payment Method:</p>
			</div>
			<div className='flex flex-col gap-5'>
				<h1 className='text-3xl font-semibold'>Price:</h1>
			</div>
		</div>
		<hr className='w-full' />
		<div className='w-1/2 flex flex-row justify-between'>
			<div className='flex flex-col gap-5'>
				<p>Subtotal:</p>
				<p>Shipping:</p>
			</div>
			<div className='flex flex-col gap-5'>
				<p>Subtotal:</p>
				<p>Shipping:</p>
			</div>
		</div>
		<hr className='w-full' />
		<div className='w-1/2 flex flex-row justify-between'>
			<h1 className='text-3xl font-semibold'>Total:</h1>	
			<p>Price</p>
		</div>
	</div>
  )
}
