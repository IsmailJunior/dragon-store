import {useState} from 'react'

export const SecondStageForm = () =>
{
	const [ modelName, setModelName ] = useState( '' );
  const [ modelDescription, setModelDescription ] = useState( '' );
  const [ modelPrice, setModelPrice ] = useState( '' );
    const canSaveModel = [ modelName, modelPrice, modelDescription ].every( Boolean );

	const onModelNameChanged = ( e ) => setModelName( e.target.value );
  const onModelDescriptionChanged = ( e ) => setModelDescription( e.target.value );
  const onModelPriceChanged = ( e ) => setModelPrice( e.target.value );
  return (
	<>
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
            <button className='w-44 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>Add Model</button>
          </div>
        </div>
      </div>
      <div className='flex justify-end px-20'>
      <button disabled={!canSaveModel ? true : false} className='w-44 h-10 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Next</button>
      </div>
	</>
  )
}
