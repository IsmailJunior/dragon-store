import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Oval} from 'react-loader-spinner'
import { selectLanding,updateLandingInvertTextColor,selectEditStatus,selectItems,selectStatus,updateLanding,selectUpdateLandingStatus} from '../../features/items/itemsSlice'
import {FeatureBlockAdmin} from './FeatureBlockAdmin'

export const EditBannerPageAdmin = () =>
{
	const [ showItems, setShowItems ] = useState( false );
	const updateLandingStatus = useSelector( selectUpdateLandingStatus );
	const status = useSelector(selectStatus)
	const items = useSelector( selectItems );
	const params = useParams();
	const editStatus = useSelector( selectEditStatus );
	const dispatch = useDispatch();
	const landing = useSelector( selectLanding );
	const banner = landing?.banners?.firstBanner ? landing?.banners[ params.banner ] : null
	const onInvertHeadlineColorClickedHandler = () => {
		dispatch( updateLandingInvertTextColor( { group: 'banners', item: params.banner } ) );
	}

	const onCancelClickedHandler = () =>
	{
		setShowItems(false)
	}

	const onUpdateClickedHandler = ( id ) =>
	{
		dispatch( updateLanding( { group: 'banners', item: params.banner, side: null ,id: id } ) );
		if ( updateLandingStatus === 'success' )
		{
			setShowItems(false)
		}
	}

	const onReplaceBannerClickedHandler = () =>
	{
		setShowItems(true)
	}
	useEffect( () =>
	{
		if ( editStatus === 'success' || updateLandingStatus === 'success')
		{
			window.location.reload()
		}
	}, [editStatus,updateLandingStatus])
	return (
	<div>
			{ showItems ? <div className='w-120  mx-auto p-5 shadow-lg bg-white'>
				<h1 className='text-3xl font-semibold mb-7'>Select Item</h1>
				<hr />
				{ status === 'success' && updateLandingStatus !== 'loading' ?
					<>
						<div className='w-full flex my-6 flex-col gap-6'>
							{ items?.map( ( item, i ) => (
								<div onClick={ () => onUpdateClickedHandler( item?.id ) } className='hover:bg-slate-100 transition-all cursor-pointer flex h-16 overflow-hidden shadow justify-between items-center border rounded-lg text-center' key={ i }>
									<div className='flex items-center gap-10'>
										<div>
											<img width={ 100 } src={ item.previews[ 0 ] } alt={ item.name } />
										</div>
										<div className='text-md font-semibold'>{ item.name }</div>
									</div>
									<div className='flex '>
										<div className='flex gap-5'>
											{ item.storages.map( ( storage, i ) => (
												<span className='border rounded-lg p-1 text-md font-semibold' key={ i }>{ storage.storage }GB</span>
											) ) }
										</div>
										<div className='mx-5 text-md font-semibold'>${ item.price }</div>
									</div>
								</div>
							) ) }
							<button onClick={ onCancelClickedHandler } className='w-44 h-10 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>Cancel</button>
						</div>
					</>
					: <div className="flex justify-center items-center h-52">
						<Oval secondaryColor="black" color="white" />
					</div> }
			</div>
				: <>
					<div className='py-16 flex flex-col items-center gap-10 p-5 shadow-md bg-white'>
						<h1 className='text-4xl font-semibold'>{ banner?.name }</h1>
						<h1 className='text-xl'>Edit Controls</h1>
						<div className='flex gap-5'>
							<button onClick={ onInvertHeadlineColorClickedHandler } disabled={ editStatus === 'loading' ? true : false } className=' disabled:text-slate-400 disabled:bg-white disabled:cursor-default w-52 h-16 flex justify-center items-center font-semibold border p-3 cursor-pointer rounded-lg hover:bg-slate-500 hover:text-white transition-all active:bg-slate-400'>
								<span>{ editStatus === 'loading' ? <Oval width={ 20 } color='white' secondaryColor='black' /> : 'Invert Headline Color' }</span>
							</button>
							<button onClick={ onReplaceBannerClickedHandler } disabled={ editStatus === 'loading' ? true : false } className=' disabled:text-slate-400 disabled:bg-white disabled:cursor-default w-52 h-16 flex justify-center items-center font-semibold border p-3 cursor-pointer rounded-lg hover:bg-slate-500 hover:text-white transition-all active:bg-slate-400'>
								<span>Replace Banner</span>
							</button>
						</div>
						<FeatureBlockAdmin invert={ banner?.invertText } title={ banner?.name } description={ banner?.description } image={ banner?.banner } />
					</div>
	</> }
	</div>
  )
}