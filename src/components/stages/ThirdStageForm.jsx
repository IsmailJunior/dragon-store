import {useState} from 'react'

export const ThirdStageForm = () =>
{
	const [ storage, setSotorage ] = useState( '' );
  const [ storagePrice, setStoragePrice ] = useState( '' );
    const canSaveStorage = [ storage, storagePrice ].every( Boolean );

	const onStorageChanged = ( e ) => setSotorage( e.target.value );
  const onStoragePriceChanged = ( e ) => setStoragePrice( e.target.value );
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
            <button className='w-44 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>Add Storage</button>
            </div>
        </div>
      </div>
        <div className='flex justify-end px-20'>
      <button disabled={!canSaveStorage ? true : false} className='w-44 h-10 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Next</button>
      </div>
	</>
  )
}
