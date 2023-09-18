import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { addGuest,getItem,selectGetItemStatus,selectItem,addToCart,selectCartStatus} from '../features/items/itemsSlice';
import {useParams} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import { Oval } from "react-loader-spinner";
import { RadioSquareModel } from "../components/RadioSquareModel";
import { RadioSquareStorage } from "../components/RadioSquareStorage";
import { RadioCircle } from "../components/RadioCircle";
import {RadioSquareContained} from '../components/RadioSqureContained'
import { Summary } from "../components/Summary";

export const ProductPage = () =>
{
	const dispatch = useDispatch()
	if ( localStorage.getItem( 'guest' ) === null )
	{
		dispatch( addGuest() );
	}
	const cartStatus = useSelector( selectCartStatus );
	const getItemStatus = useSelector( selectGetItemStatus )
	const item = useSelector( selectItem );
	const params = useParams();
	const [ product, setProduct ] = useState( {} );
	const [ colorProp, setColorProp ] = useState( '' );
	const [ storageProp, setStorageProp ] = useState( '' );
	const [ modelProp, setModelProp ] = useState({})
	const [ colorLabelProp, setColorLabelProp ] = useState( '' );
	
	const onAddToBagClickedHandler = (id) =>
	{
		if ( localStorage.getItem( 'guest' ) != null)
		{
			dispatch( addToCart( { id: id } ) )
		}
		}
	useEffect( () =>
	{
		if ( getItemStatus === 'idle' )
		{
		(async () => {
		dispatch( getItem( { id: params?.product } ) )
	})()
		}
	if ( getItemStatus === 'success' )
	{
		setProduct( { ...item } );
		setModelProp( {
			modelName: product?.name,
			modelPrice: product?.price,
			selected: false
		})
	}
	}, [ dispatch, getItemStatus,item,params.product,product?.name,product?.price] );
return (	
<div className="mx-12 sm:mx-24 md:mx-32 py-10">
		{ getItemStatus === 'success' ? (
<>
	<div className="mb-10">
		<h1 className="text-4xl md:text-6xl font-semibold mb-5">{product.name}</h1>
		<p>{product.description}</p>
	</div>
	<div className="flex flex-col lg:flex-row gap-12">
		<div className="flex flex-col gap-10">
		<div className="bg-no-repeat bg-center bg-cover w-82 sm:w-96 md:w-112 lg:w-120 h-80 border-2 flex justify-center items-center rounded-xl" style={ { backgroundImage: `url(${ product?.previews?.at( 0 ) })` } }>
						</div>
			<h1 className="text-2xl font-semibold">
			Payment options. Select the one that works for you.
			</h1>			
			<div className="flex flex-col gap-6">
			<RadioSquareContained id={uuid()} name='cash'  title='Zain Cash' description='Pay with zain cash'/>				
			<RadioSquareContained id={uuid()} name='cash'  title='Cash' description='Pay cash'/>				
			</div>					
			<div className="flex justify-center gap-5">
			</div>
				<Summary			
				productId={ product?.id }				
				model={modelProp}	
				color={colorProp}
				storage={storageProp}
				title={product?.name}
				image={product?.transparent}
				price={product?.price}
				/>
		</div>
		<fieldset>
			<legend>
				<h1 className="text-2xl font-semibold mb-7">
					Model. Which is best for you?
				</h1>
			</legend>
			<div className="flex flex-col gap-24">
				<div className="flex flex-col gap-3">
					{product?.models?.map((model, i) => (
						<RadioSquareModel
							changedData={ ( modelProp ) => setModelProp( () => ({...modelProp,selected: true} )) }
						key={i}
						data={{ data: model }}
						id={uuid()}
						name="model"
						/>
					))}
				</div>
				<div className={modelProp.selected ? "flex flex-col gap-6" : "flex flex-col gap-6 opacity-30"}>
				<h1 className="text-2xl font-semibold mb-4 w-80">
				Finish. Pick your favorite.
				</h1>	
				<h1 className=" text-lg mb-1 font-semibold">Color - {colorLabelProp ? colorLabelProp : colorProp}</h1>
				<div className="w-80 lg:w-52 flex flex-wrap gap-5">
					{product?.colors?.map((color, i) => (
					<RadioCircle model={modelProp.selected} label={(colorLabelProp) => setColorLabelProp(colorLabelProp)} changedData={(colorProp) => setColorProp(colorProp)} name={color.colorName} color={color.colorHex} key={i} id={uuid()} />
					))}
				</div>
				</div>			

				<div className={colorProp ? "flex flex-col gap-3" : "flex flex-col gap-3 opacity-30 select-none"}>
					<h1 className="text-2xl font-semibold mb-4 w-80">
						Storage. How much space do you need?
					</h1>
					{ product?.storages?.map( ( storage, i ) => (
						<RadioSquareStorage
						modelPrice={ modelProp.modelPrice }
						color={colorProp}
						changedData={(storageProp) => setStorageProp(storageProp)}
						key={i}
						titleLabel="GB"
						data={{ data: storage}}
						id={uuid()}
						name="storage"
						/>
					))}
				</div>
			</div>
			</fieldset>
			<button onClick={() => onAddToBagClickedHandler(product.id)} disabled={ !storageProp || cartStatus === 'loading' ? true : false } className="w-82 sm:w-96 md:w-112 lg:w-44 lg:hidden h-10 disabled:bg-blue-300 flex justify-center items-center hover:bg-blue-600 border active:bg-blue-500 border-slate-300 p-2 rounded-md bg-blue-500 text-white">{cartStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add to Bag'}</button>		
		</div>
	</>
	) : (
	<div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
	</div>)}
</div>
);
};