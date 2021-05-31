/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//! COMPONENTS
import Layout from '../components/Layout';
// import Sidebar from '../components/Sidebar';
import Sidenav from '../components/Sidenav';
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
    <Layout active="dashboardPage">
      <div className="flex min-h-full bg-gray-200">
        <div className="w-1/2 p-5 bg-green-200">
          <h1>Short Term Goals</h1>
          <input type="text" />
        </div>
        <div className="w-1/2 bg-blue-500">
          <h1>List</h1>
        </div>
      </div>
      {/* <div className="w-full">
          <div className="w-full h-full p-10 bg-gray-200">
            <div className="container h-full p-5 bg-gray-300 rounded-lg">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div> */}
      {/* <div className="flex flex-col items-start justify-center lg:flex-row">
          <div className="flex flex-col w-full lg:flex-row">
            <div>
              <Sidebar active="dashboard" />
            </div>
            <div className="w-full">
              <div className="w-full h-full p-10 bg-gray-200">
                <div className="container h-full p-5 bg-gray-300 rounded-lg">
                  <h1>Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </Layout>
  );
};
export default DashboardPage;
