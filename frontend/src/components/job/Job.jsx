import React from "react";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <Link to="/job/2" className="w-full flex py-4 px-6 flex-col items-start  border-t cursor-pointer hover:bg-gray-100">
      <h2 className="text-xl font-bold text-green-600">Job title</h2>
      <p className="text-start text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        consectetur incidunt repudiandae, quia mollitia iusto eaque ipsam dolore
        a laboriosam cupiditate laudantium, assumenda totam! Fugiat sunt
        consequatur atque dolore deserunt!
      </p>
      <div className="mt-3 flex space-x-2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <span>location</span>
      </div>
      <div className="mt-1 flex space-x-2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6z"
          />
        </svg>

        <span>Remote</span>
      </div>
    </Link>
  );
};

export default Job;
