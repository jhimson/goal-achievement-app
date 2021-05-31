/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className="flex-row min-h-full bg-gray-200 ">
        <div className="w-full p-3 bg-gray-100 md:p-5 lg:w-1/2">
          <div className="h-auto p-5 bg-gray-300 rounded shadow">
            <h2 className="mb-10 font-mono text-2xl font-extrabold text-center text-gray-800 md:text-4xl">
              Input short term goal
            </h2>
            <form className="space-y-4">
              <div className="text-center">
                <input
                  type="text"
                  id="goal"
                  className="block w-full px-2 py-1 mb-3 font-mono text-lg rounded focus:outline-none"
                  placeholder="Input goal here..."
                />
                <button className="px-4 py-1 text-lg font-bold bg-blue-400 rounded focus:outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-screen p-3 font-sans bg-gray-100 md:h-auto">
          <table className="bg-white rounded-lg shadow-lg table-auto border-1">
            <thead>
              <tr className="text-sm leading-normal text-center text-gray-600 uppercase bg-gray-200">
                <th className="px-8 py-4 text-left bg-gray-200">Description</th>
                <th className="px-8 py-4 text-left bg-gray-200">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  Move to a studio apartment with laundry and dryer inside
                </td>
                <td className="px-6 py-3 text-left">05/31/2021</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  Finish my web application projects and developer portfolio
                </td>
                <td className="px-6 py-3 text-left">05/31/2021</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  Apply for a Sofrware developer job
                </td>
                <td className="px-6 py-3 text-left">05/31/2021</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  Create a Youtube channel for boxing
                </td>
                <td className="px-6 py-3 text-left">05/31/2021</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  Study more trading strategies for stock market
                </td>
                <td className="px-6 py-3 text-left">05/31/2021</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  Develop a self discipline to work out daily
                </td>
                <td className="px-6 py-3 text-left">05/31/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
export default ShortTermGoalsPage;
