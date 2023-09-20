import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux';
import { addToCart} from '../features/items/itemsSlice';
export const Summary = ( { title, image, storage, color, model} ) =>
{
	const navigate = useNavigate();
	const dispatch = useDispatch();
		const cartItem = {
		model: model,
		color: color,
		storage: storage,
		image: image,
		price: Number(storage?.storagePrice) > Number(model?.modelPrice) ? storage?.storagePrice : model?.modelPrice,
			paymentMethod: 'Zain Cash',
		id: uuid()
	}

	const onAddToBagClickedHandler = () =>
	{
		if ( localStorage.getItem( 'guest' ) != null)
		{
			dispatch( addToCart( cartItem ) )
			navigate('/bag')
		}
		}
	return (
<div className="hidden w-96 lg:w-120 relative overflow-hidden lg:flex justify-around bg-slate-200 rounded-xl p-8" style={{height: 450}}>
	<div className="flex flex-col">
		<p className="text-md lg:text-3xl font-semibold">Your new<br />
			{ title }.<br />
			<span className='text-slate-500'>Just the way you</span><br/>
			<span className='text-slate-500'>want it.</span>
		</p>
		<img className='absolute top-60 w-52'  src={image} />
	</div>
	<div className="w-52 flex flex-col gap-7">
		<h1 className="text-md font-semibold">{model?.modelName ? model?.modelName : 'Choose your model.'}</h1>
		<p className='font-semibold'>{storage ? `$${Number(storage?.storagePrice) > Number(model?.modelPrice) ? storage?.storagePrice : model?.modelPrice}`: ' Model Price'}</p>
		<p className=' font-semibold'>One time payment</p>
	</div>
	<div className="w-52 flex flex-col gap-7">
		<h1  className='font-semibold'>Storage: { storage.storage }{storage ? 'GB' : null}</h1>
		<p className=' font-semibold'>Color: {color}</p>
				<button onClick={ onAddToBagClickedHandler} disabled={ !storage ? true : false } className="w-36 lg:w-44 h-10 disabled:bg-blue-300 flex justify-center items-center hover:bg-blue-600 border active:bg-blue-500 border-slate-300 p-2 rounded-md bg-blue-500 text-white">Add to Bag</button>
	</div>
</div>
)
}