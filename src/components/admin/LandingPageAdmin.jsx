
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Oval} from 'react-loader-spinner'
import { selectLanding,updateLanding,selectStatus,selectItems,selectUpdateLandingStatus} from '../../features/items/itemsSlice';
import { FeatureBlockAdmin } from './FeatureBlockAdmin';
import { FeaturesGroupAdmin } from './FeaturesGroupAdmin'
export const LandingPageAdmin = () =>
{
	const [ showItems, setShowItems ] = useState( false );
	const [ selectedItem, setSelectedItem ] = useState( {} );
	const items = useSelector( selectItems )
	const updateLandingStatus = useSelector(selectUpdateLandingStatus)
	const status = useSelector(selectStatus)
	const dispatch = useDispatch();
	const landing = useSelector( selectLanding );
	const onCancelClickedHandler = () =>
	{
		setShowItems(false)
	}
	const onFirstBlockClickedHanlder = () =>
	{
		setShowItems( true )
		setSelectedItem( {
			group: 'banners',
			item: 'firstBanner',
		})
	}
	const onSecondBlockClickedHanlder = () =>
	{
		setShowItems( true )
		setSelectedItem( {
			group: 'banners',
			item: 'secondBanner',
		})
	}
	const onThirdBlockClickedHanlder = () =>
	{
		setShowItems( true )
		setSelectedItem( {
			group: 'banners',
			item: 'thirdBanner',
		})
	}

	const onFirstSectionLeftBlockClickedHandler = () =>
	{
		setShowItems( true )
		setSelectedItem( {
			group: 'blocks',
			item: 'firstSection',
			side: 'leftBlock'
		})
	}
	const onFirstSectionRightBlockClickedHandler = () =>
	{
			setShowItems( true )
			setSelectedItem( {
			group: 'blocks',
			item: 'firstSection',
			side: 'rightBlock'
		})
	}
	const onSecondSectionLeftBlockClickedHandler = () =>
	{
		setShowItems( true )
		setSelectedItem( {
			group: 'blocks',
			item: 'secondSection',
			side: 'leftBlock'
		})
	}
	const onSecondSectionRightBlockClickedHandler = () =>
	{
			setShowItems( true )
			setSelectedItem( {
			group: 'blocks',
			item: 'secondSection',
			side: 'rightBlock'
		})
	}
	const onThirdSectionLeftBlockClickedHandler = () =>
	{
		setShowItems( true )
		setSelectedItem( {
			group: 'blocks',
			item: 'thirdSection',
			side: 'leftBlock'
		})
	}
	const onThirdSectionRightBlockClickedHandler = () =>
	{
			setShowItems( true )
			setSelectedItem( {
			group: 'blocks',
			item: 'thirdSection',
			side: 'rightBlock'
		})
	}

	const onUpdateClickedHandler = ( id ) =>
	{
		dispatch( updateLanding( { group: selectedItem.group, item: selectedItem.item, side: selectedItem?.side ,id: id } ) );
		if ( updateLandingStatus === 'success' )
		{
			setShowItems(false)
		}
	}

	useEffect( () =>
	{
		if ( updateLandingStatus === 'success' )
		{
			window.location.reload()
		}
	},[updateLandingStatus])
return (
<>
	{showItems ? <div className='w-120  mx-auto p-5 shadow-lg bg-white'>
	<h1 className='text-3xl font-semibold mb-7'>Select Item</h1>	
	<hr />	
		{ status === 'success' && updateLandingStatus !== 'loading' ? <><div className='w-full flex my-6 flex-col gap-6'>
	
			{ items?.map( ( item, i ) => (
		<div onClick={() => onUpdateClickedHandler(item?.id)} className='hover:bg-slate-100 transition-all cursor-pointer flex h-16 overflow-hidden shadow justify-between items-center border rounded-lg text-center' key={i}>
		<div className='flex items-center gap-10'>
		<div>
		<img width={100} src={item.previews[0]} alt={item.name} />			
		</div>	
		<div className='text-md font-semibold'>{ item.name }</div>					
		</div>
		<div className='flex '>
		<div className='flex gap-5'>
		{ item.storages.map( ( storage, i ) => (
			<span className='border rounded-lg p-1 text-md font-semibold' key={i}>{storage.storage}GB</span>	
		))}				
		</div>		
		<div className='mx-5 text-md font-semibold'>${ item.price }</div>					
		</div>			
		</div>
			) ) }
      <button onClick={onCancelClickedHandler} className='w-44 h-10 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>Cancel</button>
			</div>
			</>
			: <div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
	</div>}
		</div>
	: <>
	<FeatureBlockAdmin onClick={ onFirstBlockClickedHanlder } title={ landing?.banners?.firstBanner?.name } description={ landing?.banners?.firstBanner?.description } image={ landing?.banners?.firstBanner?.banner } id={ landing?.banners?.firstBanner?.id } link='Shop Now >' />
	<FeatureBlockAdmin onClick={onSecondBlockClickedHanlder} title={landing?.banners?.secondBanner?.name} description={landing?.banners?.secondBanner?.description} image={landing?.banners?.secondBanner?.banner} id={landing?.banners?.secondBanner?.id} link='Shop Now >'/>
	<FeatureBlockAdmin onClick={onThirdBlockClickedHanlder} title={landing?.banners?.thirdBanner?.name} description={landing?.banners?.thirdBanner?.description} image={landing?.banners?.thirdBanner?.banner} id={landing?.banners?.thirdBanner?.id} link='Shop Now >'/>
<div className='mx-3'>
	<FeaturesGroupAdmin onLeftClick={onFirstSectionLeftBlockClickedHandler} onRightClick={onFirstSectionRightBlockClickedHandler} data={{data: landing?.blocks?.firstSection}}/>
	<FeaturesGroupAdmin onLeftClick={onSecondSectionLeftBlockClickedHandler} onRightClick={onSecondSectionRightBlockClickedHandler}  data={{data: landing?.blocks?.secondSection}}/>
	<FeaturesGroupAdmin onLeftClick={onThirdSectionLeftBlockClickedHandler} onRightClick={onThirdSectionRightBlockClickedHandler} data={{data: landing?.blocks?.thirdSection}}/>
</div> </>}	
</>
)
}