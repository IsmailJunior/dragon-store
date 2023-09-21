import {useState, useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { Oval } from "react-loader-spinner";
import { selectItems,selectStatus,deleteItem,selectCancelStatus} from '../../features/items/itemsSlice'

export const AllItemsAdmin = () =>
{
	const [ showModal, setShowModal ] = useState( false );
	const [ selectedItem, setSelectedItem ] = useState( {} );
	const deleteStatus = useSelector( selectCancelStatus );
	const dispatch = useDispatch();
	const items = useSelector( selectItems );
	console.log(items)
	const status = useSelector( selectStatus );
	document.body.style.overflow = showModal ? 'hidden' : null
	const onItemClickedHandler = (item) =>
	{
		setShowModal( true )
		setSelectedItem( item )
	}

	const onCancelClickedHandler = () =>
	{
		setShowModal(false)
	}

	const onDeleteClickedHandler = (id) =>
	{
		dispatch(deleteItem({docId: id}))
	}

	useEffect( () =>
  {
    if (deleteStatus === 'success'  )
    {
      window.location.reload()
    }
  }, [deleteStatus] )
  return (
	<div className='w-120  mx-auto p-5 shadow-lg bg-white'>
	<h1 className='text-3xl font-semibold mb-7'>All Items</h1>	
	<hr />	
		{ status === 'success' ? <div className='w-full flex my-6 flex-col gap-6'>
		{ showModal ?
		<div className='top-0 left-0 w-screen h-screen absolute bg-opacity-20 bg-black'>
		<div className='border-2 w-96 h-72 top-32 left-96 py-16 fixed flex flex-col items-center gap-10 p-5 shadow-md bg-white'>
		<h1 className='text-xl font-semibold text-red-600'>Are you sure you want to delete</h1>
		<span className='text-3xl font-semibold'>{selectedItem.name}</span>				  
		<div className='w-full flex justify-between'>					
      <button onClick={onCancelClickedHandler} disabled={deleteStatus === 'loading' ? true : false} className='w-44 h-10 disabled:bg-slate-300 hover:bg-slate-400 transition-all mb-2 bg-slate-500 text-white rounded-lg'>Cancel</button>
      <button onClick={() => onDeleteClickedHandler(selectedItem.id)} disabled={deleteStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-500 transition-all mb-2 bg-red-600 text-white rounded-lg'>{deleteStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Delete'}</button>
	</div>
		</div>
		</div>			  
		: null}		
		{ items?.map( ( item, i ) => (
		<div onClick={() => onItemClickedHandler(item)} className='cursor-pointer flex h-16 overflow-hidden shadow justify-between items-center border rounded-lg text-center' key={i}>
		<div className='flex items-center gap-10'>
		<div>
		<img width={100} src={item.previews?.at(0)} alt={item.name} />			
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
		</div> : <div className="flex justify-center items-center h-52">
		<Oval secondaryColor="black" color="white" />
	</div>}
	</div>
  )
}
