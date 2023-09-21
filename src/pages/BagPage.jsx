export const BagPage = () =>
{
	const cart = JSON.parse( localStorage.getItem( 'guest' ) );
	const initialValue = 0;
	const prices = cart.cart.map( ( item ) => Number(item.price) );
	const total = prices.reduce( ( prev, curr ) => prev + curr, initialValue );

	const onDeleteItemClickedHandler = (id) =>
	{
		const filteredCart = cart.cart.filter( ( item ) => item.id !== id );
		const newCart = {cart: filteredCart}
		localStorage.setItem( 'guest', JSON.stringify( newCart ) )
		window.location.reload()
	}
return (
<div className="flex flex-col gap-8 items-center lg:container mt-7 mb-7">
	<h1 className='text-lg md:text-3xl font-semibold'>Your Total is: </h1>
		{ cart.cart.map( ( item,i ) => (
			<div key={i} className=' cursor-pointer flex flex-col md:flex-row gap-10'>
			<img width={ 150 } src={item.image} />
		<div className='flex flex-col gap-5'>
				<h1 className='text-lg md:text-3xl font-semibold'>{item.model.modelName}</h1>
				<p className='font-semibold'>Storage: {item.storage.storage}GB</p>
				<p className='font-semibold'>Color: {item.color}</p>
			<p className='font-semibold'>Payment Method: {item.paymentMethod}</p>
		</div>
		<div className='flex flex-col gap-5'>
					<h1 className='text-3xl font-semibold'>Price: ${ item.price }</h1>
					<button onClick={() => onDeleteItemClickedHandler(item.id)} className="w-80 hover:bg-blue-600 border active:bg-blue-500 border-slate-300 p-2 rounded-md bg-blue-500 text-white">Remove</button>
		</div>
	</div>
	))}
	<hr className='w-full' />
	<div className='w-1/2 flex flex-row justify-between'>
			<h1 className='text-3xl font-semibold'>Total: ${total}</h1>
	</div>
</div>
)
}