import { configureStore } from '@reduxjs/toolkit';
import itemsSliceReducer from '../features/itemsSlice/items';

const store = configureStore( {
	reducer: {
		items: itemsSliceReducer
	}
} );

export default store;