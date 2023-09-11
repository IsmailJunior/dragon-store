import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const initialState = {
	status: 'idle',
	user: null
};

export const signIn = createAsyncThunk( 'user/signIn', async ( { email, password } ) =>
{
	try
	{
		await signInWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		return error.messeage;
	}
} );

const userSlice = createSlice( {
	name: 'user',
	initialState,
	reducers: {
		logIn: ( state, action ) =>
		{
			state.user = action.payload;
			state.status = 'success'
		},
		logOut: ( state ) =>
		{
			signOut( auth );
			state.status = 'success'
			state.user = null;
		}
	},
	extraReducers ( builder )
	{
		builder.addCase( signIn.pending, ( state ) =>
		{
			state.status = 'loading';
		} )
			.addCase( signIn.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( signIn.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				state.user = action.payload;
			} );
	}
} );
export const selectUser = ( state ) => state.user.user;
export const selectStatus = ( state ) => state.user.status;
export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;