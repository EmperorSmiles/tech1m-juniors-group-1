import React, { useState } from "react";
import logo from "../assets/images/logos/white.png";
import backgroundImg from "../assets/images/background_images/page2.jpg";
import "../assets/css/global.css";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import { Formik } from "formik";
import arrow from "../assets/icons/login.svg";
import { BsPerson } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlinePhone,
} from "react-icons/ai";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div
      className=" h-screen md:h-screen w-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-dblue-900 h-screen bg-opacity-70 md:h-full flex flex-col  md:flex-row items-center justify-between md:px-20">
        <div className="mt-5 md:mt-0">
          <img src={logo} alt="background" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            fullname: "",
            phone: "",
            role: "", 
          }}
          onSubmit={async (values, { resetForm }) => {
            
          }}
        >
          {({ errors, touched }) => (
            <div className="grid px-5 my-5 md:my-0 md:w-1/2 w-fit-content rounded-lg bg-white-30 h-fit-content py-5 md:py-20 justify-between md:px-10 items-center ">
              
              <div>
                <SignInForm
                  title="Fullname"
                  inputType="text"
                  placeholder="Adams Chuks"
                  name="fullname"
                  smalltext="Enter your full name without special character"
                />
                <BsPerson className="relative top-[-1.5em] left-[90%] md:left-[75%]" />
                {errors.fullname && touched.fullname && (
                  <p className="text-xs text-error w-[90%] grid justify-left ">
                    {errors.fullname}
                  </p>
                )}
              </div>

              
              <div>
                <SignInForm
                  title="Email Address"
                  inputType="email"
                  placeholder="Adams@gmail.com"
                  name="email"
                  smalltext="Enter your valid email"
                />
                <AiOutlineMail className="relative top-[-1.5em] left-[90%] md:left-[75%]" />
                {errors.email && touched.email && (
                  <p className="text-xs text-error w-[90%] grid justify-left ">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <SignInForm
                  title="Password"
                  inputType={showPassword ? "text" : "password"}
                  placeholder="......"
                  name="password"
                  smalltext="Enter strong password"
                />
                {showPassword ? (
                  <AiOutlineEye
                    className="relative top-[-1.5em] left-[90%] md:left-[75%]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="relative top-[-1.5em] left-[90%] md:left-[75%]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                {errors.password && touched.password && (
                  <p className="text-xs text-error w-[90%] grid justify-left ">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <SignInForm
                  title="Phone Number"
                  inputType="text"
                  name="phone"
                  placeholder="xxx xxx xxx"
                  smalltext="Enter your phone number with country code"
                />
                <AiOutlinePhone className="relative top-[-1.5em] left-[90%] md:left-[75%]" />
                {errors.phone && touched.phone && (
                  <p className="text-xs text-error w-[90%] grid justify-left ">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="col-span-2 w-[100%] md:w-[95%]">
                <div className="flex mb-1 justify-between">
                  <label htmlFor="" className="text-primary-500 text-xs">
                    Role
                  </label>
                  <p className="text-primary-200 text-xs">Details</p>
                </div>
                <select
                  name="role"
                  className="items-center bg-white-20 p-1.5 text-primary-200 text-sm px-4 w-full"
                >
                  <option value="">Instructor</option>
                  <option value="">Super Admin</option>
                  <option value="">Admin</option>
                </select>
                <p className="text-xs text-neutral-50">Select your role</p>
              </div>

              <button
                className="md:col-span-2 rounded-lg disabled:bg-primary-100 hover:bg-primary-500 py-1 bg-primary-200 text-white-10 w-[95%]"
                type="submit"
              >
                <Link to="/login">
                <div className="flex justify-center space-x-2">
                  <img src={arrow} alt="" />
                    <div>Sign up</div>
                </div>
                  </Link>
              </button>

              <p className="text-xs text-center md:col-span-2">
                Already have an account!{" "}
                <Link
                  to="/login"
                  className="text-primary-200 hover:text-primary-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
