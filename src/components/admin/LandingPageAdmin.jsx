
import { useState, useEffect } from 'react';
import {useSelector } from 'react-redux';
import { selectLanding,selectUpdateLandingStatus} from '../../features/items/itemsSlice';
import { FeatureBlockAdmin } from './FeatureBlockAdmin';
import { FeaturesGroupAdmin } from './FeaturesGroupAdmin';
export const LandingPageAdmin = () =>
{
	const [ showModal, setShowModal ] = useState( false );
	const [ selectedItem, setSelectedItem ] = useState( {} );
	document.body.style.overflow = showModal ? 'hidden' : null
	const updateLandingStatus = useSelector(selectUpdateLandingStatus)
	const landing = useSelector( selectLanding );
	const onCancelClickedHandler = () =>
	{
		setShowModal(false)
	}

	const onEditClickedHandler = () =>
	{
		setShowModal(false)
		window.location.replace( `/admin/edit-banner/${ selectedItem?.item }` );
	}
	const onFirstBlockClickedHanlder = () =>
	{
		setShowModal(true)
		setSelectedItem( {
			item: 'firstBanner',
			name: landing?.banners?.firstBanner?.name
		})
	}
	const onSecondBlockClickedHanlder = () =>
	{
		setShowModal(true)
		setSelectedItem( {
			item: 'secondBanner',
			name: landing?.banners?.secondBanner?.name
		})
	}
	const onThirdBlockClickedHanlder = () =>
	{
		setShowModal(true)
		setSelectedItem( {
			item: 'thirdBanner',
			name: landing?.banners?.secondBanner?.name
		})
	}

	const onFirstSectionLeftBlockClickedHandler = () =>
	{
		setSelectedItem( {
			group: 'blocks',
			item: 'firstSection',
			side: 'leftBlock'
		})
	}
	const onFirstSectionRightBlockClickedHandler = () =>
	{
			setSelectedItem( {
			group: 'blocks',
			item: 'firstSection',
			side: 'rightBlock'
		})
	}
	const onSecondSectionLeftBlockClickedHandler = () =>
	{
		setSelectedItem( {
			group: 'blocks',
			item: 'secondSection',
			side: 'leftBlock'
		})
	}
	const onSecondSectionRightBlockClickedHandler = () =>
	{
			setSelectedItem( {
			group: 'blocks',
			item: 'secondSection',
			side: 'rightBlock'
		})
	}
	const onThirdSectionLeftBlockClickedHandler = () =>
	{
		setSelectedItem( {
			group: 'blocks',
			item: 'thirdSection',
			side: 'leftBlock'
		})
	}
	const onThirdSectionRightBlockClickedHandler = () =>
	{
			setSelectedItem( {
			group: 'blocks',
			item: 'thirdSection',
			side: 'rightBlock'
		})
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
		{ showModal ?
			<div className='z-20 top-0 left-0 w-screen absolute bg-opacity-20 bg-black' style={{height: 9000 + '100vh'}}>
				<div className='border-2 w-96 h-72 top-32 left-96 py-16 fixed flex flex-col items-center gap-10 p-5 shadow-md bg-white'>
					<h1 className='text-2xl font-semibold text-slate-600'>Editing</h1>
					<span className='text-4xl font-semibold'>{selectedItem.name} Banner?</span>
					<div className='w-full flex justify-between'>
						<button onClick={ onCancelClickedHandler } className='w-44 h-10 disabled:bg-slate-300 hover:bg-slate-400 transition-all mb-2 bg-slate-500 text-white rounded-lg'>Cancel</button>
						<button onClick={onEditClickedHandler} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Edit</button>
					</div>
				</div>
			</div>
			: null}<>	
	<FeatureBlockAdmin onClick={ onFirstBlockClickedHanlder } title={ landing?.banners?.firstBanner?.name } description={ landing?.banners?.firstBanner?.description } image={ landing?.banners?.firstBanner?.banner } id={ landing?.banners?.firstBanner?.id } invert={landing?.banners?.firstBanner?.invertText} link='Shop Now >' />
	<FeatureBlockAdmin onClick={onSecondBlockClickedHanlder} title={landing?.banners?.secondBanner?.name} description={landing?.banners?.secondBanner?.description} image={landing?.banners?.secondBanner?.banner} id={landing?.banners?.secondBanner?.id} link='Shop Now >' invert={landing?.banners?.secondBanner?.invertText}/>
	<FeatureBlockAdmin onClick={onThirdBlockClickedHanlder} title={landing?.banners?.thirdBanner?.name} description={landing?.banners?.thirdBanner?.description} image={landing?.banners?.thirdBanner?.banner} id={landing?.banners?.thirdBanner?.id} link='Shop Now >' invert={landing?.banners?.thirdBanner?.invertText}/>
<div className='mx-3'>
	<FeaturesGroupAdmin onLeftClick={onFirstSectionLeftBlockClickedHandler} onRightClick={onFirstSectionRightBlockClickedHandler} data={{data: landing?.blocks?.firstSection}}/>
	<FeaturesGroupAdmin onLeftClick={onSecondSectionLeftBlockClickedHandler} onRightClick={onSecondSectionRightBlockClickedHandler}  data={{data: landing?.blocks?.secondSection}}/>
	<FeaturesGroupAdmin onLeftClick={onThirdSectionLeftBlockClickedHandler} onRightClick={onThirdSectionRightBlockClickedHandler} data={{data: landing?.blocks?.thirdSection}}/>
</div> </>
</>
)
}