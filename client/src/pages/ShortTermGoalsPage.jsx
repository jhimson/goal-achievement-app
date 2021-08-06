/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Moment from 'moment';
import * as yup from 'yup';

import { IoTrash } from 'react-icons/io5';

//! COMPONENTS
import { useToasts } from 'react-toast-notifications';

import Layout from '../components/Layout';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';
//! ----------------------------------------------------->

// ! ACTIONS
import {
  addNewShortTermGoal,
  getShortTermGoals,
  deleteShortTermGoal,
  toggleShortTermGoalIsComplete,
} from '../redux/actions/shortTermGoalActions';
// ! ------------------------------------------------------------------>

// ! VALIDATION SCHEMAS
const schema = yup.object().shape({
  goal: yup.string().required('*Goal cannot be blank!'),
});
// ! ------------------------------------------------------------------>

const ShortTermGoalsPage = () => {
  // ! COMPONENT STATE VARIABLES
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const { addToast } = useToasts();
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

  const shortTermGoals = useSelector(
    (state) => state.shortTermGoalsList.goals.data
  );

  const shortTermGoalsIsLoading = useSelector(
    (state) => state.shortTermGoalsList.loading
  );

  const shortTermGoal = useSelector((state) => state.newShortTermGoal);
  const { success: createShortTermGoalSuccess } = shortTermGoal;

  const deleteShortTermGoalData = useSelector(
    (state) => state.shortTermGoalDeleted
  );
  const { success: deleteShortTermGoalSuccess } = deleteShortTermGoalData;

  const isCompleteData = useSelector((state) => state.shortTermGoalCompleted);
  const { success: toggleIsCompleteSuccess } = isCompleteData;

  // ! -------------------------------------------->

  // ! FUNCTIONS

  useEffect(() => {
    if (userId) {
      dispatch(getShortTermGoals(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (token === null) history.push('/');
  }, [token, history]);

  useEffect(() => {
    dispatch(getShortTermGoals(userId));
  }, [dispatch, createShortTermGoalSuccess, userId]);

  useEffect(() => {
    dispatch(getShortTermGoals(userId));
  }, [dispatch, deleteShortTermGoalSuccess, userId]);

  useEffect(() => {
    dispatch(getShortTermGoals(userId));
  }, [dispatch, toggleIsCompleteSuccess, userId]);

  const onSubmit = ({ goal }) => {
    dispatch(addNewShortTermGoal({ user_id: userId, description: goal }));
    if (createShortTermGoalSuccess) {
      addToast('Successfully Added Short Term Goal', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
    reset();
  };
  // ! -------------------------------------------->
  return (
    <Layout active="shortTermGoalsPage">
      <div className="relative flex flex-col items-center min-h-full overflow-y-scroll bg-gray-100">
        {isModalVisible ? (
          <Modal
            title="short term goal"
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
            deleteFunc={() => dispatch(deleteShortTermGoal(idToDelete))}
          />
        ) : null}
        <div className="w-full p-3 bg-gray-100 xl:p-10 lg:w-11/12 ">
          <div className="h-auto p-5 bg-red-400 rounded shadow">
            <h2 className="mb-10 font-mono text-2xl font-extrabold text-center text-gray-800 md:text-4xl">
              Input short term goal
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
          {shortTermGoalsIsLoading ? (
            <div className="flex items-center justify-center">
              <Spinner
                loading={shortTermGoalsIsLoading}
                type="Oval"
                height="100"
                width="100"
                color="lightblue"
              />
            </div>
          ) : (
            <table className="w-full bg-white rounded-lg shadow-lg table-fixed border-1">
              <thead>
                <tr className="text-sm leading-normal text-center text-gray-600 uppercase bg-gray-200 lg:text-lg">
                  <th className="px-6 py-4 text-left bg-gray-200">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left bg-gray-200">Date</th>
                  <th className="px-6 py-4 text-center bg-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600 lg:text-lg">
                {shortTermGoals.length !== 0 ? (
                  shortTermGoals.map(
                    ({ id, description, created_at, is_complete }) => (
                      <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                        key={id}
                        onClick={() => {
                          dispatch(
                            toggleShortTermGoalIsComplete(id, is_complete)
                          );
                        }}
                      >
                        <td className="px-6 py-3 font-semibold text-left break-words cursor-pointer">
                          {is_complete ? <s>{description}</s> : description}
                        </td>
                        <td className="px-6 py-3 font-semibold text-left cursor-pointer">
                          {Moment(created_at).format('l')}
                        </td>
                        <td className="flex items-center justify-center h-12 text-red-500">
                          <span className="duration-200 transform cursor-pointer hover:scale-125">
                            <IoTrash
                              size="1.5em"
                              onClick={() => {
                                setIdToDelete(id);
                                setIsModalVisible(!isModalVisible);
                              }}
                            />
                          </span>
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <h1 className="p-2 text-lg text-gray-400 lg:text-2xl">
                    No short term goals found!
                  </h1>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default ShortTermGoalsPage;
