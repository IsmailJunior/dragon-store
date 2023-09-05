import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { store } from '../../config/firebase';

const initialState = {
	status: 'idle',
	items: [],
	item: {
		name: '',
		company: '',
		price: 0,
		description: '',
		models: [],
		storages: [],
		colors: []
	}
};

export const addItem = createAsyncThunk( 'items/addItem', async ( item ) =>
{
	try
	{
		const collectionRef = collection( store, 'products' );
		await addDoc( collectionRef, item );
	} catch ( error )
	{
		console.log( error.message );
	}
} );

const itemsSlice = createSlice( {
	name: 'items',
	initialState,
	reducers: {
		addModel: ( state, action ) =>
		{
			state.item.models.push( action.payload );
		},
		addStorage: ( state, action ) =>
		{
			state.item.storages.push( action.payload );
		},
		addColor: ( state, action ) =>
		{
			state.item.colors.push( action.payload );
		},
		addInfo: ( state, action ) =>
		{
			const { name } = action.payload;
			const { company } = action.payload;
			const { price } = action.payload;
			const { description } = action.payload;
			state.item.name = name,
				state.item.company = company,
				state.item.price = price,
				state.item.description = description;
		}
	},
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
export const { addModel, addStorage, addColor, addInfo } = itemsSlice.actions;
export default itemsSlice.reducer;