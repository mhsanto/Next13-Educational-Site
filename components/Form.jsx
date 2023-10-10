"use client";
import { UserAuth } from "@/lib/Context";
import { useState } from "react";
export default function Form() {
  const { signin } = UserAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    //check if password and confirm password match
    if (
      e.target.elements.password.value !==
      e.target.elements.confirm_password.value
    ) {
      setErrorMessage(
        <p className="pt-3 text-red-600 px-0">
          Password and Confirm Password do not match
        </p>
      );
    } else {
      const { email, password } = e.target.elements;
      await signin(email.value, password.value);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
    >
      <p className="text-gray-100 text-lg capitalize">Create An Account</p>
      <div className="pb-2 pt-4 overflow-hidden">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="block w-full p-4 text-lg rounded-md bg-slate-100 placeholder:text-black/50 text-black"
        />
      </div>
      <div className="pb-2 pt-4 overflow-hidden">
        <input
          className="block w-full p-4 text-lg rounded-md bg-slate-100 placeholder:text-black/50 text-black "
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="pb-2 pt-4 overflow-hidden">
        <input
          className="block w-full p-4 text-lg rounded-md bg-slate-100 placeholder:text-black/50 text-black "
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
        />
        {errorMessage}
      </div>

      <div className=" pb-2 pt-4">
        <button className="uppercase block w-full p-3 text-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
          Create a New Account
        </button>
      </div>
      <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden "></div>
    </form>
  );
}
