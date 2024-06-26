"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { login, registerUser } from '@/actions';
import { useState } from 'react';

type FormInputs = {
  name: string;
  email: string;
  password: string;  
}
type RegisterButtonProps = {
  pending: boolean;
};

function RegisterButton({ pending }: RegisterButtonProps) {
  return (
    <button 
      type="submit" 
      className={ clsx({
        "btn-orange": !pending,
        "btn-orange-light": pending
      })}
      disabled={ pending }
      >
      Crear cuenta
    </button>
  );
}

export const RegisterForm = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    
    // Server action
    const resp = await registerUser( name, email, password );

    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      return;
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');
  }

  return (
    <form onSubmit={ handleSubmit( onSubmit ) }  className="flex flex-col">
      <label htmlFor="email">Nombre completo</label>
      <input
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.email
            }
          )
        }
        type="email"
        { ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        type="password"
        { ...register('password', { required: true }) }
      />

      <label htmlFor="email">Confirmar Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        type="password"
        { ...register('password', { required: true }) }
      />
      
      <span className="text-red-500">{ errorMessage } </span>
      
      <RegisterButton pending={isSubmitting} />

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};