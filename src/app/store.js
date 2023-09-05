import { configureStore } from '@reduxjs/toolkit';
import itemsSliceReducer from '../features/items/itemsSlice';

const store = configureStore( {
	reducer: {
		items: itemsSliceReducer
	}
} );

export default store;