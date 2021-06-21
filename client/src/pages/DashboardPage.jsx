/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfoCard from '../components/InfoCard';

//! COMPONENTS
import Layout from '../components/Layout';
//! ----------------------------------------------------->

// ! ACTIONS
import { getTotalShortTermGoals } from '../redux/actions/shortTermGoalActions';
import { getTotalLongTermGoals } from '../redux/actions/longTermGoalActions';

// ! ------------------------------------------------------------------>

const DashboardPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // ! GLOBAL STATE VARIABLE (STORE)
  const token = useSelector(
    (state) => state.userLoggedIn.userLoggedInInfo.token
  );
  const userId = useSelector(
    (state) => state.userLoggedIn.userLoggedInInfo.user_id
  );

  const totalCountOfShortTermGoals = useSelector(
    (state) => state.totalShortTermGoals.total
  );

  const totalCountOfLongTermGoals = useSelector(
    (state) => state.totalLongTermGoals.total
  );

  // ! -------------------------------------------->

  useEffect(() => {
    if (token === null) history.push('/');
  }, [token, history]);

  useEffect(() => {
    dispatch(getTotalShortTermGoals(userId));
    dispatch(getTotalLongTermGoals(userId));
  }, [dispatch, userId]);
  return (
    <Layout active="dashboardPage">
      <div className="grid p-5 mt-8 space-y-10 bg-gray-100 lg:space-y-0 lg:grid-cols-2 lg:p-5 lg:gap-3 xl:grid-cols-3">
        <InfoCard
          title="Short term goals"
          color="red"
          total={
            totalCountOfShortTermGoals
              ? totalCountOfShortTermGoals.data[0].total_short_term_goals
              : 0
          }
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          }
        />
        <InfoCard
          title="Long term goals"
          color="green"
          total={
            totalCountOfLongTermGoals
              ? totalCountOfLongTermGoals.data[0].total_long_term_goals
              : 0
          }
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
          }
        />
        <InfoCard
          title="Achievements"
          color="blue"
          total={2}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          }
        />
        <InfoCard
          title="Needs to improve"
          color="yellow"
          total={2}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
        />
        <InfoCard
          title="Mistakes/Regrets"
          color="indigo"
          total={2}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          }
        />
        <InfoCard
          title="Lesson learned"
          color="pink"
          total={2}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          }
        />
      </div>
    </Layout>
  );
};
export default DashboardPage;
