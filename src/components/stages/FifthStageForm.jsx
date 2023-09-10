import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Oval} from 'react-loader-spinner'
import {selectAddStatus, uploadImages,UploadPreviews} from '../../features/items/itemsSlice'

export const FifthStageForm = () =>
{
  const status = useSelector( selectAddStatus );
  const dispatch = useDispatch()
	const [ banner, setBanner ] = useState( '' );
  const [ block, setBlock ] = useState( '' );
  const [ card, setCard ] = useState( '' );
  const [ transparent, setTransparent ] = useState( '' );
  const [ preview, setPreview ] = useState( '' );
	const canSaveImages = [ banner, block, card, transparent ].every( Boolean );
	const onBannerChanged = ( e ) => setBanner( e.target.files[ 0 ] );
  const onBlockChanged = ( e ) => setBlock( e.target.files[ 0 ] );
  const onCardChanged = ( e ) => setCard( e.target.files[ 0 ] );
  const onTransparentChanged = ( e ) => setTransparent( e.target.files[ 0 ] );
  const onPreviewChanged = ( e ) => setPreview( e.target.files[ 0 ] );
  
  useEffect( () =>
  {
    if ( status === 'success' )
    {
      window.location.reload()
    }
  }, [ status ] )
  
  const onAddPreviewClickedHandler = () =>
  {
    if ( !preview ) return console.log( 'Please fill the forms.' );
    dispatch( UploadPreviews( { preview: preview } ) );
  }  

  const onUploadClickedHandler = () =>
  {
    if ( !canSaveImages) return console.log( 'Please fill the forms.' );
    dispatch( uploadImages( { banner: banner, card: card, block: block, transparent: transparent } ) );
    localStorage.setItem('images', 'true')
  }

  const onNextClickedHandler = () =>
  {
    localStorage.setItem( 'fifthStageForm', 'false' );
    localStorage.setItem( 'sixthStageForm', 'true' );
    window.location.reload();
  }
  return (
	<>
		<div className='flex flex-col'>
          <label htmlFor="company">Images:</label>
          <div className='flex flex-wrap gap-10  border p-4 rounded-lg my-4'>
            <div className='flex flex-col'>
              <input onChange={onBannerChanged} className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700' type="file" id='banner' name='banner' />
            <label className='text-sm my-5 text-slate-500' htmlFor="banner">Banner</label>
            <div className='flex items-center gap-10 mt-5'>
              </div>
            </div>
            <div className='flex flex-col'>
              <input onChange={onBlockChanged} className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700' type="file" id='block' name='block' />
            <label className='text-sm my-5 text-slate-500' htmlFor="block">Block</label>
            <div className='flex items-center gap-10 mt-5'>
              </div>
            </div>
            <div className='flex flex-col'>
              <input onChange={onCardChanged} className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700' type="file" id='card' name='card' />
            <label className='text-sm my-5 text-slate-500' htmlFor="card">Card</label>
            <div className='flex items-center gap-10 mt-5'>
              </div>
            </div>
            <div className='flex flex-col'>
              <input onChange={onTransparentChanged} className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700
      hover:file:bg-violet-100' type="file" id='transparent' name='transparent' />
            <label className='text-sm my-5 text-slate-500' htmlFor="transparent">Transparent</label>
            <div className='flex items-center gap-10 mt-5'>
              </div>
            </div>
            <div className='flex flex-col'>
              <input onChange={onPreviewChanged} className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700' type="file" id='preview' name='preview' />
            <label className='text-sm my-5 text-slate-500' htmlFor="preview">Preview</label>
            <div className='flex items-center gap-10 mt-5'>
              <button disabled={!preview || status === 'loading' ? true : false} onClick={onAddPreviewClickedHandler}  className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>{status === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Add preview'}</button>
              </div>
            </div>
        </div>
        <div className='flex gap-10'>
          <button onClick={onUploadClickedHandler} disabled={!canSaveImages || status === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>{status === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Upload images'}</button>
        </div>
      </div>
      <div className='flex justify-end px-20'>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('images') === 'false' || status === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>{status === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Preview'}</button>
      </div>
	</>
  )
}
