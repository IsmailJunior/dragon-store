import {useState, useEffect} from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { store } from '../config/firebase';
import { RadioSquare } from '../components/RadioSquare'
import { RadioCircle } from '../components/RadioCircle'
import { RadioSquareContained } from '../components/RadioSqureContained'
import {Summary} from '../components/Summary'
export const ProductPage = () =>
{
	const [ product, setProduct ] = useState({});
	const docRef = doc( store, 'products', 'fZZDnNyQILQQ4T8VJzQs' );
	useEffect( () =>
	{
		( async () =>
		{
			const docSnap = await getDoc( docRef );
			if ( docSnap.exists() )
			{
				setProduct( docSnap.data() )
			}
		})()
	}, [])

  return (
	<div className="mx-20 py-10">
		<div className="mb-10">
			<h1 className="text-6xl font-semibold mb-5">{product.title}</h1>	
		<p>{product.description}</p>
		</div>
		<div className="flex gap-12">
			<div className='flex flex-col gap-10'>
			<div className="w-120 h-80 border-2 flex justify-center items-center rounded-xl">
			<img src="https://static.thenounproject.com/png/1269202-200.png" />
			</div>
			<h1 className='text-3xl font-semibold'>Headline Description</h1>	
			<div className='flex justify-center gap-5'>
			<RadioSquareContained id='nine' name='payment'/>	
			<RadioSquareContained id='ten' name='payment'/>	
			</div>
				<Summary />
			</div>	
				<fieldset>
					<legend>
					<h1 className="text-3xl font-semibold mb-7">Headline Description</h1>	
					</legend>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3'>
						{ product?.model?.map( ( model, i ) => (
							<RadioSquare key={i} data={{model: model}} id={i} name='price'/>
						))}
					</div>	
					<h1 className='text-xl mb-1'>Color:</h1>
					<div className='flex gap-5'>
						<RadioCircle id='three' color='gold' name='color'/>
						<RadioCircle id='four' color='purple' name='color'/>
						<RadioCircle id='five' color='black' name='color'/>
					</div>
					<div className='flex flex-col gap-3'>
						<h1 className='text-3xl font-semibold mb-7'>Headline Description</h1>
						{ product?.storage?.map( ( model, i ) => (
							<RadioSquare key={i} data={{model: model}} id={i} name='price'/>
						))}
					</div>
					</div> 
				</fieldset>
		</div>
	</div>
  )
}
