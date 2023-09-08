import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addItem,selectAddStatus} from '../../features/items/itemsSlice'
export const FirstStageForm = () =>
{
  const status = useSelector( selectAddStatus );
  const dispatch = useDispatch();
const [ name, setName ] = useState( '' );
const [ description, setDescription ] = useState( '' );
const [ company, setCompany ] = useState( '' );
  const [ price, setPrice ] = useState( '' );
  const canSave = [ name, description, company, price].every( Boolean );
	const onNameChanged = ( e ) => setName( e.target.value );
  const onDescriptionChanged = ( e ) => setDescription( e.target.value );
  const onCompanyChanged = ( e ) => setCompany( e.target.value );
  const onPriceChanged = ( e ) => setPrice( e.target.value );


  useEffect( () =>
  {
    if ( status === 'success' )
    {
      window.location.reload()
    }
}, [status])

  const onNextClickedHandler = () =>
  {

    if ( !canSave ) return console.log( 'Please fill the forms.' );
    dispatch( addItem( { name: name, description: description, company: company, price: price } ) );
    localStorage.setItem( 'firstStageForm', 'false' );
    localStorage.setItem( 'secondStageForm', 'true' );
  }
  return (
	<div>
	<div className='w-full my-10 flex flex-col'>
          <label htmlFor="name">Headline:</label>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <input onChange={onNameChanged} autoFocus className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='name' name='name' />
              <label className='text-sm text-slate-500' htmlFor="name">Name</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onDescriptionChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='description' name='description' />
              <label className='text-sm text-slate-500' htmlFor="description">Description</label>
            </div>
        </div>
      </div>
      <div className='w-full my-10 flex flex-col'>
          <label htmlFor="company">Details:</label>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <input onChange={onCompanyChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='company' name='company' />
              <label className='text-sm text-slate-500' htmlFor="company">Company</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onPriceChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="number" id='price' name='price' />
              <label className='text-sm text-slate-500' htmlFor="price">Price</label>
            </div>
        </div>
      </div>
      <div className='flex justify-end px-20'>
      <button onClick={onNextClickedHandler} disabled={!canSave ? true : false} className='w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Next</button>
      </div>
	</div>
  )
}
