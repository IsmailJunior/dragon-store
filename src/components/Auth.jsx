
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import { selectStatus, signIn } from '../features/user/userSlice'
import {auth} from '../config/firebase'

export const Auth = () =>
{
  const status = useSelector( selectStatus );
  const dispatch = useDispatch()
  const navigate = useNavigate();
	const [ email, setEamil ] = useState( '' );
	const [ password, setPassword ] = useState( '' );
	const onEmailChanged = ( e ) => setEamil(e.target.value);
  const onPasswordChanged = ( e ) => setPassword( e.target.value );
  const canSave = [email,password].every(Boolean)
  const onSignInClickedHandler = () =>
  {
    if ( !canSave ) return console.log( "Error please fill out the forms" );
     dispatch( signIn( { email: email, password: password } ) );
    auth.onAuthStateChanged( ( user ) =>
    {
      if ( !user ) return navigate( '/login' );
      if(user) return window.location.replace('/admin')
    })
  }
  return (
	<div>
		<h1 className='font-semibold text-3xl'>Sign in to Proceed to admin control panel.</h1>
		<div className='w-full my-10 flex flex-col'>
          <label htmlFor="email">Sign In:</label>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <input onChange={onEmailChanged} autoFocus className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="email" id='email' name='email' />
              <label className='text-sm text-slate-500' htmlFor="email">Email</label>
            </div>
            <div className='flex flex-col'>
              <input onChange={onPasswordChanged} className='hover:border-blue-800 hover:border-2 w-80 h-10 p-3 rounded border border-slate-400 my-3' type="password" id='password' name='password' />
              <label className='text-sm text-slate-500' htmlFor="description">Password</label>
            </div>
        </div>
      </div>
      <button onClick={ onSignInClickedHandler } disabled={ !canSave || status === 'loading' ? true : false } className='flex justify-center items-center w-44 h-10 disabled:bg-sky-300 hover:bg-sky-500 transition-all mb-2 bg-sky-600 text-white rounded-lg'>{status === 'loading' ? <Oval secondaryColor='black' color='white' width={20}/> : 'Sign in'}</button>
	</div>
  )
}
