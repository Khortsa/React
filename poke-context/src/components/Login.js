import React from 'react';
import {useForm} from 'react-hook-form';




function Login(){
    const {register, handleSubmit, formState} = useForm();
    const {errors} = formState;
    
    const onSubmitHandler =(data) =>{
        // console.log('this is it:', data )
    }
    const onErrorHandler =(error) =>{
        // console.log('this is it:', data )
    }
    return(
        <>
        <h1>Type your username and password to log in</h1>
            <form onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
                <div>
                    <input type='username' placeholder='username' className='col-lg-10 text-center' {...register('username', {required:true, maxLength:15})}/>
                    <span>{errors.username?.type === 'required' && 'enter your username'}</span>
                    <span>{errors.username?.type === 'maxLength' && 'Maximum 15 letters'}</span>
                    </div>
                    <div>
                    <input type='password' placeholder='password'className='col-lg-10 text-center' {...register('password', {required:true, minLength:6})}/>
                    <span>{errors.password?.type === 'required' && 'enter you password'}</span>
                    <span>{errors.password?.type === 'minLength' && 'password need to be more than 6 characters'}</span> 
                </div>
                
                <button className='buttton btn-primary col-lg-10 text-center' type='submit'>Se Connecter</button>
            </form>
        </>
    )
}
export default Login;