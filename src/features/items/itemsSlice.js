import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { store, storage } from '../../config/firebase';

const initialState = {
	status: 'idle',
	items: []
};

export const addItem = createAsyncThunk( 'items/addItem', async ( item ) =>
{
	try
	{
		const collectionRef = collection( store, 'products' );
		await addDoc( collectionRef, item );
	} catch ( error )
	{
		console.error( error.message );
	}
} );

export const uploadTemp = createAsyncThunk( 'items/uploadTemp', async () =>
{

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
			.addCase( addItem.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} );
	}
} );
export const selectItem = ( state ) => state.items.item;
export default itemsSlice.reducer;