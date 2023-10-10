"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "@/lib/Context";
import Form from "./Form";
export default function GoogleSignin() {
  const { user, signInWithGoogle } = UserAuth();
  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {}
  };
  return (
    <>
      <div className="py-6 space-x-2 ">
        <button
          className="transition-colors duration-300 flex items-center gap-1.5 bg-white text-gray-900 py-2 px-6 text-sm font-medium rounded-sm  uppercase shadow w-full justify-center border-2 hover:bg-transparent hover:border-2 hover:text-white"
          onClick={() => signIn()}
        >
          <FcGoogle size={25} />
          Sign in with Google
        </button>
        <p className="text-gray-100">or</p>
      </div>
      <Form />
    </>
  );
}
