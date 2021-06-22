import React from 'react';

const InfoCard = ({ title, color, logo, total }) => {
  const x = 0;
  return (
    <div className="w-full bg-white rounded-lg shadow-xl ">
      <div className="flex justify-between p-5">
        <div>
          <div className={`text-${color}-500`}>{total}</div>
          <div className="font-mono text-lg text-gray-500">{title}</div>
        </div>
        <div className="items-center">{logo}</div>
      </div>
      <div
        className={`flex items-center space-x-5 py-3 px-5 text-left bg-${color}-400 rounded-b-lg text-white text-lg font-bold`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="text-sm">Updated: 2:05 AM</div>
      </div>
    </div>
  );
};

export default InfoCard;
