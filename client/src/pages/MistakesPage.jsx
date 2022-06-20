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
  insertNewMistake,
  getAllMistakes,
  deleteMistake,
} from '../redux/actions/mistakesActions';
// ! ------------------------------------------------------------------>

// ! VALIDATION SCHEMAS
const schema = yup.object().shape({
  mistake: yup.string().required('*Mistake cannot be blank!'),
});
// ! ------------------------------------------------------------------>

const MistakesPage = () => {
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

  const mistakesCreate = useSelector((state) => state.newMistake);
  const { success: mistakeCreateSuccess } = mistakesCreate;

  const mistakesList = useSelector(
    (state) => state.mistakesList.mistakes.data || []
  );

  const mistakesIsLoading = useSelector((state) => state.mistakesList.loading);

  const mistakeDelete = useSelector((state) => state.mistakeDeleted);
  const { success: mistakeDeletedSuccess } = mistakeDelete;
  // ! -------------------------------------------->

  // ! FUNCTIONS

  useEffect(() => {
    if (token === null) history.push('/');
  }, [token, history]);

  useEffect(() => {
    dispatch(getAllMistakes(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(getAllMistakes(userId));
  }, [dispatch, mistakeCreateSuccess, userId]);

  useEffect(() => {
    dispatch(getAllMistakes(userId));
  }, [dispatch, userId, mistakeDeletedSuccess]);

  const onSubmit = ({ mistake }) => {
    dispatch(insertNewMistake({ user_id: userId, description: mistake }));
    if (mistakeCreateSuccess) {
      addToast('Successfully added a new mistake', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
    reset();
  };
  // ! -------------------------------------------->
  return (
    <Layout active="mistakesPage">
      <div className="relative flex flex-col items-center min-h-full overflow-y-scroll bg-gray-100">
        {isModalVisible ? (
          <Modal
            title="mistake"
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
            deleteFunc={() => dispatch(deleteMistake(idToDelete))}
          />
        ) : null}
        <div className="w-full p-3 bg-gray-100 xl:p-10 lg:w-11/12 ">
          <div className="h-auto p-5 bg-blue-400 rounded shadow">
            <h2 className="mb-10 font-mono text-2xl font-extrabold text-center text-gray-800 md:text-4xl">
              Input new Mistake
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col w-full lg:w-1/2 place-items-start">
                  <input
                    type="text"
                    id="mistake"
                    className="block w-full px-2 py-1 font-mono text-lg rounded focus:outline-none"
                    placeholder="Input mistake here..."
                    ref={register}
                    name="mistake"
                  />
                  <span className="text-lg font-semibold text-red-700">
                    {errors.mistake && errors.mistake.message}
                  </span>
                </div>
                <button className="px-4 py-1 mt-3 text-lg font-bold text-gray-200 duration-300 transform bg-blue-700 rounded w-52 focus:outline-none hover:scale-125">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="items-center justify-center w-full h-screen px-3 font-sans bg-gray-100 lg:w-11/12 xl:p-10 md:h-auto">
          {mistakesIsLoading ? (
            <div className="flex items-center justify-center">
              <Spinner
                loading={mistakesIsLoading}
                type="Oval"
                height="100"
                width="100"
                color="lightgray"
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
                {mistakesList.length !== 0 ? (
                  mistakesList.map(({ id, description, created_at }) => (
                    <tr
                      className="border-b border-gray-200 hover:bg-gray-100"
                      key={id}
                    >
                      <td className="px-6 py-3 font-semibold text-left break-words cursor-pointer">
                        {description}
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
                  ))
                ) : (
                  <h1 className="p-2 text-lg text-gray-400 lg:text-2xl">
                    No Mistakes found!
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
export default MistakesPage;
