import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ChromePicker } from 'react-color';
import {addInfo ,addModel, addStorage, addColor, addItem, selectItem} from '../features/items/itemsSlice'

export const NewItemPage = () =>
{

  const item = useSelector( selectItem );
  const dispatch = useDispatch();
  const [ name, setName ] = useState( '' );
  const [ description, setDescription ] = useState( '' );
  const [ company, setCompany ] = useState( '' );
  const [ price, setPrice ] = useState( '' );
  const [ modelName, setModelName ] = useState( '' );
  const [ modelDescription, setModelDescription ] = useState( '' );
  const [ modelPrice, setModelPrice ] = useState( '' );
  const [ storage, setSotorage ] = useState( '' );
  const [ storagePrice, setStoragePrice ] = useState( '' );
  const [ colorName, setColorName ] = useState( '' );
  const [ colorHex, setColorHex ] = useState( '' );

  const onNameChanged = ( e ) => setName( e.target.value );
  const onDescriptionChanged = ( e ) => setDescription( e.target.value );
  const onCompanyChanged = ( e ) => setCompany( e.target.value );
  const onPriceChanged = ( e ) => setPrice( e.target.value );
  const onModelNameChanged = ( e ) => setModelName( e.target.value );
  const onModelDescriptionChanged = ( e ) => setModelDescription( e.target.value );
  const onModelPriceChanged = ( e ) => setModelPrice( e.target.value );
  const onStorageChanged = ( e ) => setSotorage( e.target.value );
  const onStoragePriceChanged = ( e ) => setStoragePrice( e.target.value );
  const onColorNameChanged = ( e ) => setColorName( e.target.value );
  const onColorHexChanged = ( e ) => setColorHex( e.hex );

  const canSave = [ name, description, company, price].every( Boolean );
  const canSaveModel = [ modelName, modelPrice, modelDescription ].every( Boolean );
  const canSaveStorage = [ storage, storagePrice ].every( Boolean );
  const canSaveColor = [ colorName, colorHex ].every( Boolean );
  const onModelClickedHandler = () =>
  {
    if(!canSaveModel) return console.log('Error must fill the form.')
    dispatch( addModel( { name: modelName, description: modelDescription, price: modelPrice } ) );
  }
  const onStorageClickedHandler = () =>
  {
    if ( !canSaveStorage ) return console.log( 'Error must fill the form.' );
    dispatch( addStorage( { name: storage, price: storagePrice } ) );
  }

  const onColorClickedHandler = () =>
  {
    if ( !canSaveColor ) return console.log( 'Error must fill the form.' );
    dispatch( addColor( { name: colorName, hex: colorHex } ) );
  }
  const onSaveClickedHanlder = () =>
  {
    if ( !canSave ) return console.log( 'Error must fill the form.' );
    if ( !item.models.length || !item.colors.length || !item.storages.length ) return console.log( 'Please add a model.' );
    dispatch( addInfo( { name: name, description: description, company: company, price: price } ) );
  }

  const onAddItemClickedHandler = () =>
  {
    if ( !canSave ) return console.log( 'Error must fill the form.' );
    if ( !item.models.length || !item.colors.length || !item.storages.length ) return console.log( 'Please add a model.' );
    dispatch( addItem( item ) );
  }

  return (
    <div className='w-120 p-5 shadow-lg bg-white'>
      <div className='flex justify-between'>
        <h1 className='text-3xl mb-2 font-semibold'>Make new item.</h1>
        <button onClick={onAddItemClickedHandler} className='w-44 hover:bg-green-500 transition-all mb-2 bg-green-600 text-white rounded-lg'>Add item</button>
      </div>
      <hr />
      <div className='w-full my-10 flex flex-col'>
          <label htmlFor="name">Headline:</label>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <input onChange={onNameChanged} autoFocus className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='name' name='name' />
              <label className='text-sm text-slate-500' htmlFor="name">Name</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onDescriptionChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='description' name='description' />
              <label className='text-sm text-slate-500' htmlFor="description">Description</label>
            </div>
        </div>
      </div>
      <div className='w-full my-10 flex flex-col'>
          <label htmlFor="company">Details:</label>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <input onChange={onCompanyChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='company' name='company' />
              <label className='text-sm text-slate-500' htmlFor="company">Company</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onPriceChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="number" id='price' name='price' />
              <label className='text-sm text-slate-500' htmlFor="price">Price</label>
            </div>
        </div>
      </div>
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
            <button onClick={onModelClickedHandler} className='w-44 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>Add Model</button>
          </div>
        </div>
      </div>
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
            <button onClick={onStorageClickedHandler} className='w-44 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>Add Storage</button>
            </div>
        </div>
      </div>
            <div className='flex flex-col'>
          <label htmlFor="company">Colors:</label>
          <div className='flex flex-wrap gap-10  border p-4 rounded-lg my-4'>
            <div className='flex flex-col'>
              <input onChange={onColorNameChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="text" id='modelName' name='modelName' />
            <label className='text-sm text-slate-500' htmlFor="modelName">Color name</label>
            <div className='flex items-center gap-10 mt-5'>
                <div className='w-12 h-12 rounded-full shadow-inner shadow-gray-500' style={{backgroundColor: colorHex}}></div>
                <button onClick={onColorClickedHandler} className='w-44 hover:bg-sky-500 transition-all my-4 bg-sky-600 text-white rounded'>Add Color</button>
              </div>
            </div>
            <div className='flex flex-col'>
              <ChromePicker disableAlpha color={colorHex} onChange={onColorHexChanged} />
            <label className='text-sm text-slate-500' htmlFor="modelDescription">Color hex</label>
            </div>
        </div>
          <button onClick={onSaveClickedHanlder} className='w-44 h-8 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>Save</button>
      </div>
    </div>
  )
}
