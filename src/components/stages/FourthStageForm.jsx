import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Oval} from 'react-loader-spinner'
import {selectAddStatus,addColors} from '../../features/items/itemsSlice'
import { ChromePicker } from 'react-color';

export const FourthStageForm = () =>
{
  const status = useSelector( selectAddStatus );
  const dispatch = useDispatch()
	const [ colorName, setColorName ] = useState( '' );
  const [ colorHex, setColorHex ] = useState( '' );
  const canSaveColor = [ colorName, colorHex ].every( Boolean );
	const onColorNameChanged = ( e ) => setColorName( e.target.value );
  const onColorHexChanged = ( e ) => setColorHex( e.hex );

  useEffect( () =>
  {
    if ( status === 'success' )
    {
      window.location.reload();
    }
  }, [ status ] );

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
  return (
	<>
	<div className='flex flex-col'>
          <label htmlFor="company">Colors:</label>
          <div className='flex flex-wrap gap-10  border p-4 rounded-lg my-4'>
            <div className='flex flex-col'>
              <input onChange={onColorNameChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='modelName' name='modelName' />
            <label className='text-sm text-slate-500' htmlFor="modelName">Color name</label>
            <div className='flex items-center gap-10 mt-5'>
              <button onClick={onAddColorClickedHandler} disabled={!canSaveColor || status === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>{status === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add color'}</button>
              <div className='w-12 h-12 rounded-full shadow-inner shadow-gray-500' style={{backgroundColor: colorHex}}></div>
              </div>
            </div>
            <div className='flex flex-col'>
              <ChromePicker disableAlpha color={colorHex} onChange={onColorHexChanged} />
            <label className='text-sm text-slate-500' htmlFor="modelDescription">Color hex</label>
            </div>
        </div>
      </div>
      <div className='flex justify-end px-20'>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('colors') === 'false' || status === 'loading' ? true : false} className='flex justify-center items-center w-44 disabled:bg-sky-300 h-10 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>{status === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Next'}</button>
      </div>
	</>
  )
}
