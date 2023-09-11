import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Oval} from 'react-loader-spinner'
import { addToCart,selectCartStatus} from '../features/items/itemsSlice';
export const Summary = ( { title, price, image, storage, color, model, productId} ) =>
{
	const cartStatus = useSelector( selectCartStatus )
	const navigate = useNavigate();
	const dispatch = useDispatch();
		const onAddToBagClickedHandler = (id) =>
	{
		if ( localStorage.getItem( 'guest' ) != null)
		{
			dispatch( addToCart( { id: id } ) )
		}
		}
	
	useEffect( () =>
	{
		if ( cartStatus === 'success' )
		{
			window.location.replace('/bag')
		}
	},[cartStatus,navigate])
	return (
<div className="w-120 relative overflow-hidden flex justify-around bg-slate-200 rounded-xl p-8" style={{height: 450}}>
	<div className="flex flex-col">
		<p className="text-3xl font-semibold">Your new<br />
			{ title }.<br />
			<span className='text-slate-500'>Just the way you</span><br/>
			<span className='text-slate-500'>want it.</span>
		</p>
		<img className=' absolute  top-60' width={200} src={image} />
	</div>
	<div className="w-52 flex flex-col gap-7">
		<h1 className="text-xl font-semibold">{model?.modelName ? model?.modelName : 'Choose your model.'}</h1>
		<p className='font-semibold'>${price}</p>
		<p className=' font-semibold'>One time payment</p>
	</div>
	<div className="w-52 flex flex-col gap-7">
		<h1  className='font-semibold'>Storage: { storage }{storage ? 'GB' : null}</h1>
		<p className=' font-semibold'>Color: {color}</p>
				<button onClick={ () => onAddToBagClickedHandler( productId ) } disabled={ !storage || cartStatus === 'loading' ? true : false } className="w-44 h-10 disabled:bg-blue-300 flex justify-center items-center hover:bg-blue-600 border active:bg-blue-500 border-slate-300 p-2 rounded-md bg-blue-500 text-white">{cartStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add to Bag'}</button>
	</div>
</div>
)
}