import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../../config/firebase';

const initialState = {
	status: 'idle',
	items: []
};

const itemsSlice = createSlice( {
	name: 'items',
	initialState,
	reducers: {

	}
} );

export default itemsSlice.reducer;