/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//! COMPONENTS
import Layout from '../components/Layout';
//! ----------------------------------------------------->

const ShortTermGoalsPage = () => {
  const history = useHistory();
  // ! GLOBAL STATE VARIABLE (STORE)
  const token = useSelector((state) => state.userLogin.userLoginInfo.token);
  // ! -------------------------------------------->

  useEffect(() => {
    if (token === null) history.push('/');
  }, [token, history]);
  return (
    <Layout active="shortTermGoalsPage">
      <div className="flex min-h-full bg-gray-200">
        <div className="w-1/2 p-5 bg-green-200">
          <h1>Short Term Goals</h1>
          <input type="text" />
        </div>
        <div className="w-1/2 bg-blue-500">
          <h1>List</h1>
        </div>
      </div>
    </Layout>
  );
};
export default ShortTermGoalsPage;
