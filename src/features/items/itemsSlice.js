import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { store, storage } from '../../config/firebase';

const initialState = {
	status: 'idle',
	items: []
};

const collectionRef = collection( store, 'products' );
export const addItem = createAsyncThunk( 'items/addItem', async ( { name, description, company, price } ) =>
{
	try
	{
		const docSnapshot = await addDoc( collectionRef, {
			name: name,
			description: description,
			company: company,
			price: price
		} );
		return docSnapshot.id;
	} catch ( error )
	{
		return error;
	}
} );

export const addModel = createAsyncThunk( 'items/addModels', async ( { modelName, modelDescription, modelPrice } ) =>
{
	try
	{
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			models: arrayUnion( {
				modelName: modelName,
				modelDescription: modelDescription,
				modelPrice: modelPrice
			} )
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const addStorage = createAsyncThunk( 'items/addStorages', async ( { storage, storagePrice } ) =>
{
	try
	{
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			storages: arrayUnion( {
				storage: storage,
				storagePrice: storagePrice
			} )
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const addColors = createAsyncThunk( 'items/addColors', async ( { colorName, colorHex } ) =>
{
	try
	{
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			colors: arrayUnion( {
				colorName: colorName,
				colorHex: colorHex
			} )
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const uploadImages = createAsyncThunk( 'items/uploadImages', async ( { banner, card, block, transparent } ) =>
{
	try
	{
		const bannerRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }/banners/${ uuid() }` );
		const bannerSnapshot = await uploadBytes( bannerRef, banner );
		const bannerUrl = await getDownloadURL( bannerSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			banner: bannerUrl
		} );
		const cardRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }/cards/${ uuid() }` );
		const cardSnapshot = await uploadBytes( cardRef, card );
		const cardUrl = await getDownloadURL( cardSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			card: cardUrl
		} );
		const blockRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }/blocks/${ uuid() }` );
		const blockSnapshot = await uploadBytes( blockRef, block );
		const blockUrl = await getDownloadURL( blockSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			block: blockUrl
		} );
		const transparentRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }/transparents/${ uuid() }` );
		const transparentSnapshot = await uploadBytes( transparentRef, transparent );
		const transparentUrl = await getDownloadURL( transparentSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			transparent: transparentUrl
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const UploadPreviews = createAsyncThunk( 'items/uploadPreivews', async ( { preview } ) =>
{

	try
	{
		const previewRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }/previews/${ uuid() }` );
		const previewSnapshot = await uploadBytes( previewRef, preview );
		const previewUrl = await getDownloadURL( previewSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			previews: arrayUnion( previewUrl )
		} );
	} catch ( error )
	{
		return error;
	}
} )

const itemsSlice = createSlice( {
	name: 'items',
	initialState,
	reducers: {},
	extraReducers ( builder )
	{
		builder.addCase( addItem.pending, ( state ) =>
		{
			state.status = 'loading';
		} )
			.addCase( addItem.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( addItem.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				localStorage.removeItem( 'itemId' );
				localStorage.setItem( 'itemId', action.payload );
			} )
			.addCase( addModel.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( addModel.rejected, ( state, action ) =>
			{
				state.status = 'failed';
				console.log( action.payload );
			} )
			.addCase( addModel.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} )
			.addCase( addStorage.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( addStorage.rejected, ( state, ) =>
			{
				state.status = 'failed';
			} )
			.addCase( addStorage.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} )
			.addCase( addColors.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( addColors.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( addColors.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} )
			.addCase( uploadImages.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( uploadImages.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( uploadImages.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} )
			.addCase( UploadPreviews.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( UploadPreviews.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( UploadPreviews.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} )
	}
} );
export const selectStatus = ( state ) => state.items.status;
export const selectItem = ( state ) => state.items.item;
export default itemsSlice.reducer;