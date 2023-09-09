import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner';
import { selectAddStatus, selectItems } from '../../features/items/itemsSlice'
import {FeatureCard} from '../FeatureCard'
export const SixthStageForm = () =>
{
  const status = useSelector( selectAddStatus );
  const items = useSelector( selectItems );
  const [ item, setItem ] = useState(null);
  
  useEffect( () =>
  {
    if ( status === 'success' )
    {
      window.location.reload()
    }
    setItem( ...items.filter( ( product ) => product.id === localStorage.getItem( 'itemId' ) ) );
  }, [ status,items] )
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
  return (
    <div className='flex flex-col gap-10 my-5 w-96'>
      <FeatureCard newTab title={ item?.name } heading={ item?.description } id={ item?.id } price={ item?.price } image={ item?.card } invert />
      <button onClick={ onNextClickedHandler } className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Finish</button>
   </div>
  )
}
