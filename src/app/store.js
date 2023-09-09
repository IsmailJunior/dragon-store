import { configureStore } from '@reduxjs/toolkit';
import itemsSliceReducer from '../features/items/itemsSlice';
import userSliceReducer from '../features/user/userSlice';

const store = configureStore( {
	reducer: {
		items: itemsSliceReducer,
		user: userSliceReducer
	}
} );

export default store;