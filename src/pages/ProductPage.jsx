import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { addGuest,getItem,selectGetItemStatus,selectItem} from '../features/items/itemsSlice';
import {useParams} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import { Oval } from "react-loader-spinner";
import { RadioSquareModel } from "../components/RadioSquareModel";
import { RadioSquareStorage } from "../components/RadioSquareStorage";
import { RadioCircle } from "../components/RadioCircle";
import { Summary } from "../components/Summary";

export const ProductPage = () =>
{
	const dispatch = useDispatch()
	if ( localStorage.getItem( 'guest' ) === null )
	{
		dispatch( addGuest() );
	}
	const getItemStatus = useSelector( selectGetItemStatus )
	const item = useSelector( selectItem );
	const params = useParams();
	const [ product, setProduct ] = useState( {} );
	const [ colorProp, setColorProp ] = useState( '' );
	const [ storageProp, setStorageProp ] = useState( '' );
	const [ modelProp, setModelProp ] = useState({})
	const [ colorLabelProp, setColorLabelProp ] = useState( '' );
	
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
<div className="mx-20 py-10">
		{ getItemStatus === 'success' ? (
<>
	<div className="mb-10">
		<h1 className="text-6xl font-semibold mb-5">{product.name}</h1>
		<p>{product.description}</p>
	</div>
	<div className="flex gap-12">
		<div className="flex flex-col gap-10">
			<div className="bg-no-repeat bg-cover w-120 h-80 border-2 flex justify-center items-center rounded-xl" style={{backgroundImage: `url(${product?.previews?.at(0)})`}}>
			</div>
			<h1 className="text-2xl font-semibold">
			Payment options. Select the one that works for you.
			</h1>
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
				<div className="w-56 flex flex-wrap gap-5">
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
	</div>
	</>
	) : (
	<div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
	</div>)}
</div>
);
};