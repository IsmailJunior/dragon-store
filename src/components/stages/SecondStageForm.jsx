import { useState,useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {addModel,selectStatus} from '../../features/items/itemsSlice'

export const SecondStageForm = () =>
{
  const status = useSelector(selectStatus)
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
    if ( status === 'success' )
    {
      window.location.reload();
    }
  }, [status])

    const onAddModelClickedHandler = () =>
    {
    if ( !canSaveModel ) return console.log( 'Please fill the forms.' );
      dispatch( addModel( { modelName: modelName, modelDescription: modelDescription, modelPrice: modelPrice} ) );
      localStorage.setItem( 'models', 'true' );
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
            <button disabled={!canSaveModel ? true : false}  onClick={onAddModelClickedHandler} className='w-44 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>Add Model</button>
          </div>
        </div>
      </div>
      <div className='flex justify-end px-20'>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('models') === 'false' ? true : false} className='w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Next</button>
      </div>
	</div>
  )
}
