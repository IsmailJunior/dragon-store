import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Oval} from 'react-loader-spinner'
import {addStorage, selectAddStatus, selectCancelStatus,deleteItem} from '../../features/items/itemsSlice'
export const ThirdStageForm = () =>
{
  const addStatus = useSelector( selectAddStatus );
  const cancelStatus = useSelector( selectCancelStatus );
  const dispatch = useDispatch()
	const [ storage, setSotorage ] = useState( '' );
  const [ storagePrice, setStoragePrice ] = useState( '' );
  const canSaveStorage = [ storage, storagePrice ].every( Boolean );

	const onStorageChanged = ( e ) => setSotorage( e.target.value );
  const onStoragePriceChanged = ( e ) => setStoragePrice( e.target.value );

  useEffect( () =>
  {
    if ( addStatus === 'success' || cancelStatus === 'success' )
    {
      window.location.reload();
    }
  }, [addStatus,cancelStatus])

  const onAddStorageClickedHandler = () =>
  {
    if ( !canSaveStorage ) return console.log( 'Please fill the forms.' );
    dispatch( addStorage( { storage: storage, storagePrice: storagePrice } ) );
    localStorage.setItem('storages', 'true')
  }

  const onNextClickedHandler = () =>
  {
    localStorage.setItem( 'thirdStageForm', 'false' );
    localStorage.setItem( 'fourthStageForm', 'true' );
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
	<div className='my-10 flex flex-col'>
          <label htmlFor="storage">Specifications:</label>
          <div className='flex flex-wrap gap-3'>
            <div className='w-120 flex flex-col border p-4 my-4 rounded-lg'>
            <select onChange={onStorageChanged} className='hover:border-blue-800 hover:border-2 w-96 h-10 rounded border border-slate-400 my-3' name="storage" id="storage">
              <option value="32">32</option>
              <option value="64">64</option>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
            </select>
            <label className='text-sm text-slate-500' htmlFor="storage">Storage</label>
            <input onChange={onStoragePriceChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="number" id='storagePrice' name='storagePrice' />
            <label className='text-sm text-slate-500' htmlFor="storagePrice">Storage price</label>
            <button onClick={onAddStorageClickedHandler} disabled={!canSaveStorage || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>{addStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add storage'}</button>
            </div>
        </div>
      </div>
      <div className='flex justify-between px-20'>
      <button onClick={onCancelClickedHandler} disabled={cancelStatus === 'loading' || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>{cancelStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Cancel'}</button>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('storages') === 'false' || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Next</button>
      </div>
	</>
  )
}
