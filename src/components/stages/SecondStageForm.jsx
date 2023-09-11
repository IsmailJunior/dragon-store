import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Oval} from 'react-loader-spinner'
import {addModel,selectAddStatus,deleteItem,selectCancelStatus} from '../../features/items/itemsSlice'

export const SecondStageForm = () =>
{
  const Addstatus = useSelector( selectAddStatus );
  const cancelStatus = useSelector(selectCancelStatus)
  const dispatch = useDispatch();
	const [ modelName, setModelName ] = useState( '' );
  const [ modelDescription, setModelDescription ] = useState( '' );
  const [ modelPrice, setModelPrice ] = useState( '' );
    const canSaveModel = [ modelName, modelPrice, modelDescription ].every( Boolean );

	const onModelNameChanged = ( e ) => setModelName( e.target.value );
  const onModelDescriptionChanged = ( e ) => setModelDescription( e.target.value );
  const onModelPriceChanged = ( e ) => setModelPrice( e.target.value );

  useEffect( () =>
  {
    if ( Addstatus === 'success' || cancelStatus === 'success' )
    {
      window.location.reload();
    }
  }, [Addstatus,cancelStatus])

    const onAddModelClickedHandler = () =>
    {
    if ( !canSaveModel ) return console.log( 'Please fill the forms.' );
      dispatch( addModel( { modelName: modelName, modelDescription: modelDescription, modelPrice: modelPrice} ) );
      localStorage.setItem( 'models', 'true' );
    }
  
  const onCancelClickedHandler = () =>
  {
        localStorage.setItem('firstStageForm', 'true')
    localStorage.setItem('secondStageForm', 'false')
	localStorage.setItem( 'thirdStageForm', 'false' )
	localStorage.setItem('fourthStageForm', 'false')
    localStorage.setItem('fifthStageForm', 'false')
    localStorage.setItem('sixthStageForm', 'false')
    localStorage.setItem('models', 'false')
    localStorage.setItem('colors', 'false')
    localStorage.setItem('images', 'false')
    localStorage.setItem('images', 'false')
    localStorage.setItem( 'storages', 'false' )
	localStorage.removeItem( 'itemId' )	
    dispatch( deleteItem() )
  }
  
  const onNextClickedHandler = () =>
  {
    localStorage.setItem( 'secondStageForm', 'false' );
    localStorage.setItem( 'thirdStageForm', 'true' );
    window.location.reload();
  }
  return (
	<div>
      <div className='flex flex-col'>
          <label htmlFor="company">Models:</label>
          <div className='flex flex-wrap gap-10  border p-4 rounded-lg my-4'>
            <div className='flex flex-col'>
              <input onChange={onModelNameChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='modelName' name='modelName' />
              <label className='text-sm text-slate-500' htmlFor="modelName">Model name</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onModelDescriptionChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='modelDescription' name='modelDescription' />
              <label className='text-sm text-slate-500' htmlFor="modelDescription">Model description</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onModelPriceChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="number" id='modelPrice' name='modelPrice' />
            <label className='text-sm text-slate-500' htmlFor="modelPrice">Model price</label>
            <button disabled={!canSaveModel || Addstatus === 'loading' ? true : false}  onClick={onAddModelClickedHandler} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>{Addstatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add model'}</button>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-20'>
      <button onClick={onCancelClickedHandler} disabled={localStorage.getItem('models') === 'false' || cancelStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>{cancelStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Cancel'}</button>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('models') === 'false' || Addstatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>{Addstatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Next'}</button>
      </div>
	</div>
  )
}
