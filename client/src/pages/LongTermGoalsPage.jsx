/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IoTrash } from 'react-icons/io5';

//! COMPONENTS
import { useToasts } from 'react-toast-notifications';

import Layout from '../components/Layout';
//! ----------------------------------------------------->

// ! ACTIONS
import { addNewLongTermGoal } from '../redux/actions/longTermGoalActions';
// ! ------------------------------------------------------------------>

// ! VALIDATION SCHEMAS
const schema = yup.object().shape({
  goal: yup.string().required('*Goal cannot be blank!'),
});
// ! ------------------------------------------------------------------>

const LongTermGoalsPage = () => {
  // ! COMPONENT STATE VARIABLES

  // ! ------------------------------------------------------------------>
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const dispatch = useDispatch();
  // ! GLOBAL STATE VARIABLE (STORE)
  const token = useSelector(
    (state) => state.userLoggedIn.userLoggedInInfo.token
  );
  const userId = useSelector(
    (state) => state.userLoggedIn.userLoggedInInfo.user_id
  );
  // ! -------------------------------------------->

  // ! FUNCTIONS
  useEffect(() => {
    if (token === null) history.push('/');
  }, [token, history]);

  const onSubmit = ({ goal }) => {
    dispatch(addNewLongTermGoal({ user_id: userId, description: goal }));
    reset();
  };
  // ! -------------------------------------------->
  return (
    <Layout active="longTermGoalsPage">
      <div className="relative flex flex-col items-center min-h-full bg-gray-100">
        <div className="w-full p-3 bg-gray-100 xl:p-10 lg:w-11/12 ">
          <div className="h-auto p-5 bg-gray-300 rounded shadow">
            <h2 className="mb-10 font-mono text-2xl font-extrabold text-center text-gray-800 md:text-4xl">
              Input long term goal
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col w-full lg:w-1/2 place-items-start">
                  <input
                    type="text"
                    id="goal"
                    className="block w-full px-2 py-1 font-mono text-lg rounded focus:outline-none"
                    placeholder="Input goal here..."
                    ref={register}
                    name="goal"
                  />
                  <span className="text-lg font-semibold text-red-700">
                    {errors.goal && errors.goal.message}
                  </span>
                </div>
                <button className="px-4 py-1 mt-3 text-lg font-bold duration-300 transform bg-blue-400 rounded w-52 focus:outline-none hover:scale-125">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="items-center justify-center w-full h-screen px-3 font-sans bg-gray-100 lg:w-11/12 xl:p-10 md:h-auto">
          <table className="w-full bg-white rounded-lg shadow-lg table-auto border-1">
            <thead>
              <tr className="text-sm leading-normal text-center text-gray-600 uppercase bg-gray-200 lg:text-lg">
                <th className="px-6 py-4 text-left bg-gray-200">Description</th>
                <th className="px-6 py-4 text-left bg-gray-200">Date</th>
                <th className="px-6 py-4 text-center bg-gray-200">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600 lg:text-lg">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left cursor-pointer">
                  description
                </td>
                <td className="px-6 py-3 text-left cursor-pointer">
                  05/31/2021
                </td>
                <td className="flex items-center justify-center h-12 text-red-500">
                  <span className="duration-200 transform cursor-pointer hover:scale-125">
                    <IoTrash size="1.5em" onClick={() => {}} />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
export default LongTermGoalsPage;
