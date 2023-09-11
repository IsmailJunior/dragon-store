import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, updateDoc, doc, arrayUnion, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { store, storage } from '../../config/firebase';

const initialState = {
	cancelStatus: 'idle',
	addStatus: 'idle',
	status: 'idle',
	items: [],
	store: []
};
const storeRef = collection( store, 'store' );
const collectionRef = collection( store, 'products' );
const utiltiesCollectionRef = collection( store, 'utilties' );

export const getStore = createAsyncThunk( 'items/getStore', async () =>
{
	try
	{
		const productsRef = await getDocs( collectionRef );
		const productsData = productsRef.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		const arrayData = await getDocs( storeRef );
		const data = arrayData.docs.map( ( doc ) => doc.data() );
		const sections = data?.at( 0 )?.sections;
		sections.forEach( ( element, index, arr ) =>
		{
			element.cards.forEach( ( element, index, arr ) =>
			{
				arr[ index ] = element.id;
			} );
			arr[ index ].cards = productsData.filter( ( product ) => element.cards.includes( product.id ) );
		} );
		return sections;
	} catch ( error )
	{
		return error;
	}
} );


export const getItems = createAsyncThunk( 'items/getItems', async () =>
{
	try
	{
		const arrayData = await getDocs( collectionRef );
		const data = arrayData.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		return data;
	} catch ( error )
	{
		return error;
	}
} )

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
		const itemId = docSnapshot.id;
		await updateDoc( doc( utiltiesCollectionRef, 'XHIgATrWMN9jUv54BA8W' ), {
			CreatedItemId: itemId
		} )
		return docSnapshot.id;
	} catch ( error )
	{
		return error;
	}
} );

export const deleteItem = createAsyncThunk( 'items/deleteItem', async () =>
{
	try
	{
		const docRef = doc( store, 'utilties', 'XHIgATrWMN9jUv54BA8W' );
		let docSnap = await getDoc( docRef );
		const storageRef = ref( storage, '/products' );
		const allFolders = await listAll( storageRef );
		// const filePath = allFolders.items.filter( ( item ) =>
		// {
		// 	docSnap = `${}`
		// });
		let id = docSnap.data().CreatedItemId;
		console.log( id );
		console.log( id = `${ allFolders.items[ 2 ].fullPath.split( '/' )[ 0 ] }/${ id }` );
		console.log( allFolders.items[ 2 ].fullPath );
		// await deleteDoc( doc( store, 'products', docSnap.data().CreatedItemId ) );

	} catch ( error )
	{
		return error;
	}
} )

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
		const bannerRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_banner.jpg` );
		const bannerSnapshot = await uploadBytes( bannerRef, banner );
		const bannerUrl = await getDownloadURL( bannerSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			banner: bannerUrl
		} );
		const cardRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_card.jpg` );
		const cardSnapshot = await uploadBytes( cardRef, card );
		const cardUrl = await getDownloadURL( cardSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			card: cardUrl
		} );
		const blockRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_block.jpg` );
		const blockSnapshot = await uploadBytes( blockRef, block );
		const blockUrl = await getDownloadURL( blockSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			block: blockUrl
		} );
		const transparentRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_transparent.png` );
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
		const previewRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_preview_${ uuid() }.jpg` );
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
			state.addStatus = 'loading';
		} )
			.addCase( addItem.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addItem.fulfilled, ( state, action ) =>
			{
				state.addStatus = 'success';
				localStorage.removeItem( 'itemId' );
				localStorage.setItem( 'itemId', action.payload );
			} )
			.addCase( addModel.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( addModel.rejected, ( state, ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addModel.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( addStorage.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( addStorage.rejected, ( state, ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addStorage.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( addColors.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( addColors.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addColors.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( uploadImages.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( uploadImages.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( uploadImages.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( UploadPreviews.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( UploadPreviews.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( UploadPreviews.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( getItems.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( getItems.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( getItems.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				state.items = action.payload;
			} )
			.addCase( getStore.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( getStore.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( getStore.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				state.store = action.payload;
			} )
			.addCase( deleteItem.pending, ( state ) =>
			{
				state.cancelStatus = 'loading';
			} )
			.addCase( deleteItem.rejected, ( state ) =>
			{
				state.cancelStatus = 'failed';
			} )
			.addCase( deleteItem.fulfilled, ( state ) =>
			{
				state.cancelStatus = 'success';
			} )
	}
} );
export const selectAddStatus = ( state ) => state.items.addStatus;
export const selectCancelStatus = ( state ) => state.items.cancelStatus;
export const selectStatus = ( state ) => state.items.status;
export const selectItems = ( state ) => state.items.items;
export const selectStore = ( state ) => state.items.store;
export default itemsSlice.reducer;