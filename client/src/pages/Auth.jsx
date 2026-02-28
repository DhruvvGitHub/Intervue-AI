import React from "react";
import { SiIrobot } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

const Auth = () => {

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20 ">
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition:{duration: 0.6} }  }
       className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-400">
        <div className="w-full flex items-center justify-center gap-2">
          <SiIrobot />
          <h3 className="text-xl font-semibold">Intervue AI</h3>
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="flex items-center gap-2 px-2 py-4 bg-green-300 rounded-2xl">
            <HiSparkles />
            <h5 className="font-semibold text-lg">AI Smart Interviews</h5>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-400 text-center">Sign in to start AI powered mock interviews, track your progress and unlock detailed perfomance insights</p>
        </div>
        <motion.button
        onClick={handleGoogleAuth} 
        whileHover={{scale: 1.05}}
         className="w-full mt-2 py-2 bg-black rounded-4xl flex items-center justify-center gap-2 cursor-pointer">
          <FcGoogle />
          <p className="text-white text-sm">Continue with google</p>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Auth;
