/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//! COMPONENTS
import Layout from '../components/Layout';
//! ----------------------------------------------------->

const DashboardPage = () => {
  const history = useHistory();
  // ! GLOBAL STATE VARIABLE (STORE)
  const token = useSelector((state) => state.userLogin.userLoginInfo.token);
  // ! -------------------------------------------->

  useEffect(() => {
    if (token === null) history.push('/');
  }, [token, history]);
  return (
    <Layout>
      <div className="mb-2 bg-gray-100 page-content">
        <div className="flex flex-col items-start justify-center lg:space-x-5 lg:p-10 lg:flex-row">
          <div className="flex flex-col w-full space-y-2">
            <div>
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DashboardPage;
