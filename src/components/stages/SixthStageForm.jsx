import { useState,useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Oval } from 'react-loader-spinner';
import { selectAddStatus, selectItems,selectCancelStatus,deleteItem} from '../../features/items/itemsSlice'
import {FeatureCard} from '../FeatureCard'
export const SixthStageForm = () =>
{
  const dispatch = useDispatch();
  const addStatus = useSelector( selectAddStatus );
  const cancelStatus = useSelector( selectCancelStatus );
  const items = useSelector( selectItems );
  const [ item, setItem ] = useState(null);
  
  useEffect( () =>
  {
    if ( addStatus === 'success' || cancelStatus === 'success'  )
    {
      window.location.reload()
    }
    setItem( ...items.filter( ( product ) => product.id === localStorage.getItem( 'itemId' ) ) );
  }, [ addStatus,cancelStatus,items] )
 const onNextClickedHandler = () =>
  {
    localStorage.setItem( 'firstStageForm', 'true' );
    localStorage.setItem( 'secondStageForm', 'false' );
    localStorage.setItem( 'thirdStageForm', 'false' );
    localStorage.setItem( 'fourthStageForm', 'false' );
	  localStorage.setItem( 'fifthStageForm', 'false' );
	  localStorage.setItem( 'sixthStageForm', 'false' );
    localStorage.setItem( 'colors', 'false' );
    localStorage.setItem( 'models', 'false' );
    localStorage.setItem( 'storages', 'false' );
	  localStorage.setItem( 'images', 'false' );
    localStorage.removeItem( 'itemId' );
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
    dispatch( deleteItem() )
  }
  return (
    <div className='flex flex-col gap-10 my-5 w-96'>
      <FeatureCard newTab title={ item?.name } heading={ item?.description } id={ item?.id } price={ item?.price } image={ item?.card } invert />
        <div className='flex justify-between px-20'>
      <button onClick={onCancelClickedHandler} disabled={cancelStatus === 'loading' ? true : false} className='flex justify-center items-center w-44 h-10 disabled:bg-red-300 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>{cancelStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Cancel'}</button>
      <button onClick={ onNextClickedHandler } className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Finish</button>
      </div>
   </div>
  )
}
