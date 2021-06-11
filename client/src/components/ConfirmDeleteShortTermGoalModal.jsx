/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const ConfirmDeleteShortTermGoalModal = ({
  isModalVisible,
  setIsModalVisible,
  deleteGoal,
}) =>
  isModalVisible && (
    <div className="absolute w-4/5 p-5 space-y-10 bg-white rounded-lg shadow-xl lg:w-2/5 top-96">
      <div className="font-mono text-lg font-bold text-center">
        <h1>Are you sure you want to delete?</h1>
      </div>
      <div>
        <div className="flex justify-around font-mono text-xl">
          <button
            className="w-2/5 px-4 py-1 text-green-900 bg-green-400 rounded-lg focus:outline-none"
            onClick={() => {
              deleteGoal();
              setIsModalVisible(!isModalVisible);
            }}
          >
            Confirm
          </button>
          <button
            className="w-2/5 px-4 py-1 text-red-900 bg-red-400 rounded-lg focus:outline-none"
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

export default ConfirmDeleteShortTermGoalModal;
