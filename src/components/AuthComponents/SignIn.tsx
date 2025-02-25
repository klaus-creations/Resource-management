"use client";

import React from "react";
import { redirect } from "next/navigation";

export default function SignIn() {
  const authRedirect = function (e: any) {
    e.preventDefault();
    redirect("/admin/dashboard");
  };
  return (
    <form className="w-[50%] h-full flex flex-col items-center gap-10 justify-center bg-indigo-700/[.1] p-5">
      <h2 className="text-xl 2xl:text-2xl tracking-[2px] bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text font-extrabold uppercase ">
        Login To Admin Dashboard
      </h2>

      <div className="w-[60%] flex flex-col items-center gap-4">
        <div className="w-full flex flex-col items-start">
          <label className="text-sm font-medium text-gray-500 uppercase tracking-[0.5px] mb-2">
            Email Address
          </label>
          <input
            className="w-full px-4 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            type="email"
            placeholder="Service Email Address"
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <label className="text-sm font-medium text-gray-500 uppercase tracking-[0.5px] mb-2">
            Password
          </label>
          <input
            className="w-full px-4 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            type="email"
            placeholder="Enter Password"
          />
        </div>

        <div className="w-full flex flex-col items-start">
          <label className="text-sm font-medium text-gray-500 uppercase tracking-[0.5px] mb-2">
            Admin Role Secret Code
          </label>
          <input
            className="w-full px-4 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            type="email"
            placeholder="Specific To your Admin Role "
          />
        </div>
      </div>

      <button
        onClick={authRedirect}
        className="text-xl font-extrabold tracking-[1px] bg-indigo-600 text-white px-3 py-1 uppercase rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
