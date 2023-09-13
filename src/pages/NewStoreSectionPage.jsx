import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import {selectAddStoreStatus,addStoreSection, selectItems,selectStatus} from '../features/items/itemsSlice'
export const NewStoreSectionPage = () =>
{
  const [ showItems, setShowItems ] = useState( false );
  const [ selectedCard, setSelectedCard ] = useState( '' );
  const [title,setTitle] = useState('')
  const addStoreStatus = useSelector( selectAddStoreStatus );
  const status = useSelector(selectStatus)
  const items = useSelector( selectItems );
  const dispatch = useDispatch();
  const [ section, setSection ] = useState( {
    cards: {
      firstCard: null,
      secondCard: null,
      thirdCard: null
    }
  } )
  const canSave = [ section.cards.firstCard, section.cards.secondCard, section.cards.thirdCard ].every( Boolean );
  const onTitleChanged = ( e ) => setTitle( e.target.value );
  const onFirstCardClickedHandler = () =>
  {
    setSelectedCard( 'firstCard' );
    setShowItems( true )
  }
  const onSecondCardClickedHandler = () =>
  {
    setSelectedCard( 'secondCard' );
    setShowItems( true )
  }
  const onThirdCardClickedHandler = () =>
  {
    setSelectedCard( 'thirdCard' );
    setShowItems( true )
  }
  const onCancelClickedHandler = () =>
	{
		setShowItems(false)
  }
  
  const onAddClickedHandler = (id) =>
  {
    if ( selectedCard === 'firstCard' )
    {
      setSection( {
        cards: {
          firstCard: id,
          secondCard: section.cards.secondCard,
          thirdCard: section.cards.thirdCard
        }
      } )
    } else if ( selectedCard === 'secondCard' )
    {
      setSection( {
      cards: {
        firstCard: section.cards.firstCard,
        secondCard: id,
        thirdCard: section.cards.thirdCard
    }})
    } else if ( selectedCard === 'thirdCard' )
    {
      setSection( {
        cards: {
        firstCard: section.cards.firstCard,
        secondCard: section.cards.secondCard,
      thirdCard: id
    }})
    }
    setShowItems(false)
  }

  const onNextClickedHandler = () =>
  {
    if ( canSave )
    {
      dispatch( addStoreSection( { title: title, cards: section.cards } ) );
    }
  }

  useEffect( () =>
  {
    if ( addStoreStatus === 'success' )
    {
      window.location.reload()
    }
  }, [addStoreStatus])

  console.log(section)

  return (
	<div className='w-120 mx-auto p-5 shadow-lg bg-white'>
      <div className='flex justify-between'>
        <h1 className='text-3xl mb-2 font-semibold'>Make new section.</h1>
      </div>
      <div>
	<div className='w-full my-10 flex flex-col gap-10'>
          <div>
          <label htmlFor="title">Headline:</label>
            <div className='w-120 flex flex-col'>
              <input disabled={showItems || addStoreStatus === 'loading' ? true : false} onChange={onTitleChanged} autoFocus className=' disabled:text-slate-500 disabled:border disabled:border-slate-400 hover:border-blue-800 hover:border-2 w-96 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='tile' name='title' />
              <label className='text-sm text-slate-500' htmlFor="title">Very Presice Description</label>
          </div>
          </div>
          { showItems ? 
        <>
				<h1 className='text-3xl font-semibold mb-7'>Select Item</h1>
				<hr />
				{ status === 'success' ?
					<>
						<div className='w-full flex my-6 flex-col gap-6'>
							{ items?.map( ( item, i ) => (
								<div onClick={ () => onAddClickedHandler( item?.id ) } className='hover:bg-slate-100 transition-all cursor-pointer flex h-16 overflow-hidden shadow justify-between items-center border rounded-lg text-center' key={ i }>
									<div className='flex items-center gap-10'>
										<div>
											<img width={ 100 } src={ item.previews[ 0 ] } alt={ item.name } />
										</div>
										<div className='text-md font-semibold'>{ item.name }</div>
									</div>
									<div className='flex '>
										<div className='flex gap-5'>
											{ item.storages.map( ( storage, i ) => (
												<span className='border rounded-lg p-1 text-md font-semibold' key={ i }>{ storage.storage }GB</span>
											) ) }
										</div>
										<div className='mx-5 text-md font-semibold'>${ item.price }</div>
									</div>
								</div>
							) ) }
							<button onClick={ onCancelClickedHandler } className='w-44 h-10 hover:bg-red-400 transition-all mb-2 bg-red-500 text-white rounded-lg'>Cancel</button>
						</div>
					</>
					: <div className="flex justify-center items-center h-52">
						<Oval secondaryColor="black" color="white" />
					</div> }
            </>
            :
            <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
          <button onClick={onFirstCardClickedHandler}  disabled={title.length > 10 || addStoreStatus === 'loading' ? false : true} className=' disabled:text-slate-400 disabled:bg-white disabled:cursor-default w-44 h-36 flex justify-center items-center font-semibold border p-3 cursor-pointer rounded-lg hover:bg-slate-500 hover:text-white transition-all active:bg-slate-400'>
                <span>{section.cards.firstCard ? 'Edit First Card' : 'First Card'}</span>
					</button>
          <button onClick={onSecondCardClickedHandler} disabled={title.length > 10 || addStoreStatus === 'loading' ? false : true} className=' disabled:text-slate-400 disabled:bg-white disabled:cursor-default w-44 h-36 flex justify-center items-center font-semibold border p-3 cursor-pointer rounded-lg hover:bg-slate-500 hover:text-white transition-all active:bg-slate-400'>
							<span>{section.cards.secondCard ? 'Edit Second Card' : 'Second Card'}</span>
					</button>
          <button onClick={onThirdCardClickedHandler} disabled={title.length > 10 || addStoreStatus === 'loading' ? false : true} className=' disabled:text-slate-400 disabled:bg-white disabled:cursor-default w-44 h-36 flex justify-center items-center font-semibold border p-3 cursor-pointer rounded-lg hover:bg-slate-500 hover:text-white transition-all active:bg-slate-400'>
							<span>{section.cards.thirdCard ? 'Edit Third Card' : 'Third Card'}</span>
					</button> 
              </div>
            <button disabled={!canSave || addStoreStatus === 'loading' ? true : false}  onClick={onNextClickedHandler} className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>{addStoreStatus === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Next'}</button>
            </div>
          }
      </div>
	</div>
  </div>
  )
}
