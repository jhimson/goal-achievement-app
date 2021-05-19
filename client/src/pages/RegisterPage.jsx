/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/login-logo.png';

// ? components
import Layout from '../components/Layout';
import FlashMessage from '../components/FlashMessage';

// ? actions
import { registerNewUser, resetNewUserInfo } from '../actions/userActions';

// ? form validation schema
const schema = yup.object().shape({
  firstname: yup.string().required('Firstname is required*'),
  lastname: yup.string().required('Lastname is required*'),
  email: yup.string().email().required('Email is required*'),
  password: yup.string().min(5).required('Password is required*'),
});

const RegisterPage = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  // ? Global state (Store)
  const error = useSelector((state) => state.userRegister.error);
  const message = useSelector(
    (state) => state.userRegister.userRegisterInfo.message
  );

  // ? Functions
  const onSubmit = (data) => {
    dispatch(registerNewUser(data));
    reset();
    setTimeout(() => {
      dispatch(resetNewUserInfo());
    }, 5000);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full h-auto p-5 bg-gray-200 rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/4">
          {error ? <FlashMessage type="danger" message={error} /> : null}
          {message ? <FlashMessage type="success" message={message} /> : null}

          <div>
            <img src={logo} alt="" className="w-full h-72" />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">Account Register</h1>
            <div>
              <label htmlFor="firstname" className="w-3/6 font-semibold">
                Firstname:
              </label>
              <input
                ref={register}
                type="text"
                name="firstname"
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="font-semibold text-red-700">
                {errors.firstname && errors.firstname.message}
              </span>
            </div>
            <div>
              <label htmlFor="lastname" className="w-full font-semibold">
                Lastname:
              </label>
              <input
                ref={register}
                type="text"
                name="lastname"
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="font-semibold text-red-700">
                {errors.lastname && errors.lastname.message}
              </span>
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Email:
              </label>
              <input
                ref={register}
                type="text"
                name="email"
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="font-semibold text-red-700">
                {errors.email && errors.email.message}
              </span>
            </div>
            <div>
              <label htmlFor="password" className="font-semibold">
                Password:
              </label>
              <input
                ref={register}
                type="password"
                name="password"
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="font-semibold text-red-700">
                {errors.password && errors.password.message}
              </span>
            </div>
            <div>
              <button className="w-full py-2 mt-5 text-lg font-bold bg-blue-400 rounded focus:outline-none focus:ring-2 ">
                Sign up
              </button>
            </div>
            <div>
              <p className="mt-5 font-bold text-center text-md">
                Already have an account?{' '}
                <Link to="/" className="text-purple-600">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
