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
  confirmPassword: string; 
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
   
    try {
    console.log(data); // Esto imprimirá los datos del formulario en la consola
    setErrorMessage('');
    const { name, email, password, confirmPassword } = data;
    
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    // Server action
    const resp = await registerUser( name, email, password );
    console.log(resp);
    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      return;
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');

  } catch (error) {
    setErrorMessage('Hubo un error al conectar con el servidor');
  }
  }

  return (
    <form onSubmit={ handleSubmit( onSubmit ) }  className="flex flex-col">
      <label htmlFor="name">Nombre completo</label>
      <input
       id="name"
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.name
            }
          )
        }
        type="text"
        { ...register('name', { 
          required: 'El nombre es obligatorio', 
          validate: value => value.trim() === value || 'El nombre no debe comenzar con espacios en blanco' 
        }) }
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <label htmlFor="email">Correo electrónico*</label>
      <input
      id="email"
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.email
            }
          )
        }
        type="email"
        { ...register('email', { required: 'El correo electrónico es obligatorio', pattern: /^\S+@\S+$/i }) }
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <label htmlFor="password">Contraseña *</label>
      <input
      id="password"
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        type="password"
        { ...register('password', { required: 'La contraseña es obligatoria' }) }
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <label htmlFor="confirmPassword">Confirmar contraseña *</label>
      <input
      id="confirmPassword"
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.confirmPassword
            }
          )
        }
        type="password"
        { ...register('confirmPassword', { required: 'La confirmación de la contraseña es obligatoria' }) }
      />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      
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