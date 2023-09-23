import {v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux';
import { addToCart} from '../features/items/itemsSlice';
export const Summary = ( { title, image, storage, color, model} ) =>
{
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
			window.location.replace('/bag')
		}
		}
	return (
<div className="hidden w-96 lg:w-120 relative overflow-hidden lg:flex justify-around bg-slate-200 rounded-xl p-8" style={{height: 450}}>
	<div className="text-right flex flex-col">
		<p className="text-md lg:text-3xl font-semibold">جهاز<br />
			{ title }.<br />
			<span className='text-slate-500'>بالمواصفات</span><br/>
			<span className='text-slate-500'>التي تريدها</span>
		</p>
		<img className='absolute top-60 w-52'  src={image} />
	</div>
	<div className="w-52 flex flex-col gap-7">
		<h1 className="text-md font-semibold">{model?.modelName ? model?.modelName : 'اختر الموديل'}</h1>
		<p className='font-semibold'>{storage ? `د.ع ${Number(storage?.storagePrice) > Number(model?.modelPrice) ? storage?.storagePrice + ',000' : model?.modelPrice + ',000'}`: 'سعر'}</p>
		<p className=' font-semibold'>دفع لمرة واحدة</p>
	</div>
	<div className="w-52 flex flex-col gap-7">
		<h1  className='font-semibold'>Storage: { storage.storage }{storage ? 'GB' : null}</h1>
		<p className=' font-semibold'>Color: {color}</p>
				<button onClick={ onAddToBagClickedHandler} disabled={ !storage ? true : false } className="w-36 lg:w-44 h-10 disabled:bg-blue-300 flex justify-center items-center hover:bg-blue-600 border active:bg-blue-500 border-slate-300 p-2 rounded-md bg-blue-500 text-white">اضافة الى السلة</button>
	</div>
</div>
)
}