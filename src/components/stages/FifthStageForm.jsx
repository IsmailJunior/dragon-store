import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Oval} from 'react-loader-spinner'
import {selectAddStatus, uploadImages,UploadPreviews,selectCancelStatus,deleteItem, selectUploadPreviewStatus} from '../../features/items/itemsSlice'

export const FifthStageForm = () =>
{
  const addStatus = useSelector( selectAddStatus );
  const uploadPreviewStatus = useSelector(selectUploadPreviewStatus)
  const cancelStatus = useSelector(selectCancelStatus)
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
    if ( addStatus === 'success' || cancelStatus === 'success' ||  uploadPreviewStatus === 'success')
    {
      window.location.reload()
    }
  }, [ addStatus,uploadPreviewStatus,cancelStatus ] )
  
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
            <div className='flex items-center gap-10 my-5'>
              <button disabled={ !preview || addStatus === 'loading'  || uploadPreviewStatus === 'loading' ? true : false } onClick={ onAddPreviewClickedHandler } className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all  bg-sky-600 text-white rounded-lg'>{ uploadPreviewStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={ 20 } /> : 'Add preview' }</button>
                <button onClick={onUploadClickedHandler} disabled={!canSaveImages || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all  bg-sky-600 text-white rounded-lg'>{addStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Upload images'}</button>
              </div>
            </div>
        </div>
      </div>
      <div className='flex justify-between px-20'>
      <button onClick={onCancelClickedHandler} disabled={cancelStatus === 'loading' || uploadPreviewStatus === 'loading' || addStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>{cancelStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Cancel'}</button>
      <button onClick={onNextClickedHandler} disabled={localStorage.getItem('images') === 'false' || addStatus === 'loading' || uploadPreviewStatus === 'loading' ? true : false} className='w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Preview</button>
      </div>
	</>
  )
}
