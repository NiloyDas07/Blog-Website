import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { login, getCurrentUser } from "../../services/auth";

import { login as storeLogin } from "../../features/authSlice";

import { Logo, Button, Input } from "../";

function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    console.log("fdsfg");
    setError(null);

    try {
      const session = await login(data);
      console.log(session);

      if (session) {
        const userData = await getCurrentUser();

        if (userData) dispatch(storeLogin(userData));

        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`w-full max-w-lg rounded-xl border border-black/10 bg-gray-100 p-10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="text-primary font-medium transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="mt-8 text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(submit)} className="mt-8">
          <div className="">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                      value,
                    ) || "Please enter a valid email",
                },
              })}
            />
            {errors.email ? (
              <p className="mb-5 text-sm text-red-600">
                {errors.email.message}
              </p>
            ) : (
              <p className="mb-5"></p>
            )}

            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/.test(
                      value,
                    ) ||
                    "Password must have a length of 8-64, at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
            />
            {errors.password ? (
              <p className="mb-5 text-sm text-red-600">
                {errors.password.message}
              </p>
            ) : (
              <p className="mb-5"></p>
            )}

            <p className="mb-5 mt-2 text-center text-base text-black/60">
              <Link
                to="/forgot-password"
                className="text-primary font-medium transition-all duration-200 hover:underline"
              >
                Forgot Password?
              </Link>
            </p>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
