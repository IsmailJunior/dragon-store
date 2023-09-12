import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Oval} from 'react-loader-spinner'
import {selectAddStatus,addColors,selectCancelStatus,deleteItem} from '../../features/items/itemsSlice'
import { ChromePicker } from 'react-color';

export const FourthStageForm = () =>
{
  const addStatus = useSelector( selectAddStatus );
  const cancelStatus = useSelector( selectCancelStatus );
  const dispatch = useDispatch()
	const [ colorName, setColorName ] = useState( '' );
  const [ colorHex, setColorHex ] = useState( '' );
  const canSaveColor = [ colorName, colorHex ].every( Boolean );
	const onColorNameChanged = ( e ) => setColorName( e.target.value );
  const onColorHexChanged = ( e ) => setColorHex( e.hex );

  useEffect( () =>
  {
    if ( addStatus === 'success' || cancelStatus === 'success' )
    {
      window.location.reload();
    }
  }, [ addStatus,cancelStatus] );

  const onAddColorClickedHandler = () =>
  {
    if ( !canSaveColor ) return console.log( 'Please fill the forms.' );
    dispatch( addColors( { colorName: colorName, colorHex: colorHex } ) );
    localStorage.setItem('colors', 'true')
  };

    const onNextClickedHandler = () =>
  {
    localStorage.setItem( 'fourthStageForm', 'false' );
    localStorage.setItem( 'fifthStageForm', 'true' );
    window.location.reload();
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
    dispatch( deleteItem({id: null}) )
  }
  return (
	<>
	<div className='flex flex-col'>
          <label htmlFor="company">Colors:</label>
          <div className='flex flex-wrap gap-10  border p-4 rounded-lg my-4'>
            <div className='flex flex-col'>
              <input onChange={onColorNameChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='modelName' name='modelName' />
            <label className='text-sm text-slate-500' htmlFor="modelName">Color name</label>
            <div className='flex items-center gap-10 mt-5'>
              <button onClick={onAddColorClickedHandler} disabled={!canSaveColor || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>{addStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add color'}</button>
              <div className='w-12 h-12 rounded-full shadow-inner shadow-gray-500' style={{backgroundColor: colorHex}}></div>
              </div>
            </div>
            <div className='flex flex-col'>
              <ChromePicker disableAlpha color={colorHex} onChange={onColorHexChanged} />
            <label className='text-sm text-slate-500' htmlFor="modelDescription">Color hex</label>
            </div>
        </div>
      </div>
      <div className='flex justify-between px-20'>
      <button onClick={onCancelClickedHandler} disabled={cancelStatus === 'loading' || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>{cancelStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Cancel'}</button>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('colors') === 'false' || addStatus === 'loading' ? true : false} className='w-44 disabled:bg-sky-300 h-10 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Next</button>
      </div>
	</>
  )
}
