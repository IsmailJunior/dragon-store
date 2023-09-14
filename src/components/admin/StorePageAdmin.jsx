import { useSelector, useDispatch } from 'react-redux';
import {Oval} from 'react-loader-spinner'
import {selectStore, selectDeleteStoreStatus,deleteStoreSection} from '../../features/items/itemsSlice'
import { CategoryGroupAdmin } from './CategoryGroupAdmin';
import { FeatureCardGroupAdmin } from './FeatureCardGroupAdmin'
import { useState, useEffect} from 'react';
export const StorePageAdmin = () =>
{
	const [ selectedItem, setSelectedItem ] = useState( '' );
	const [ showModal, setShowModal ] = useState( false );
	document.body.style.overflow = showModal ? 'hidden' : null;
	const deleteStoreSectionStatus = useSelector(selectDeleteStoreStatus)
	const dispatch = useDispatch()
	const store = useSelector( selectStore );
	const onClickHandler = (item) =>
	{
		setSelectedItem(item)
		setShowModal(true)
	}

	const onCancelClickedHandler = () =>
	{
		setShowModal(false)
	}

	const onConfirmClickedHandler = () =>
	{
		dispatch( deleteStoreSection( { id: selectedItem.id } ) )
	}

	useEffect( () =>
	{
		if ( deleteStoreSectionStatus === 'success' )
		{
			window.location.reload()
		}
	}, [deleteStoreSectionStatus])

return (
	<>
		{ showModal ? 
			<div className='z-20 top-0 left-0 w-screen absolute bg-opacity-20 bg-black' style={{height: 9000 + '100vh'}}>
			<div className='border-2 w-96 h-72 top-32 left-96 py-16 fixed flex flex-col items-center gap-10 p-5 shadow-md bg-white'>
				<h1 className='text-2xl font-semibold text-slate-600'>Are you sure you want to delete this section?</h1>
				<div className='w-full mt-14 flex justify-between'>
					<button onClick={ onCancelClickedHandler } disabled={deleteStoreSectionStatus === 'loading' ? true : false} className='w-44 h-10 disabled:bg-slate-300 hover:bg-slate-400 transition-all mb-2 bg-slate-500 text-white rounded-lg'>Cancel</button>
                    <button onClick={ onConfirmClickedHandler } disabled={ deleteStoreSectionStatus === 'loading' ? true : false } className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-500 transition-all mb-2 bg-red-600 text-white rounded-lg'>{deleteStoreSectionStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Delete'}</button>
				</div>
			</div>
		</div>
		: null
		}
		<div className='mx-12 py-10'>
	<section className='flex mb-10'>
		<CategoryGroupAdmin />
	</section>
		{ store?.map( ( section, i ) => (
			<div onClick={() => onClickHandler(section)} className='border rounded-md p-4 my-5 cursor-pointer' key={i}>
				<FeatureCardGroupAdmin data={section.cards} headline={section.title}/>
			</div>
		))}
		</div>
		</>
)
}