import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormValidator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    watch
  } = useForm();

  const formValues = watch(); 

  const SubmiHandler = (data) => {
    console.log("Form Submitted:", data);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("Validation Errors:", errors);
    }
  }, [errors]);

  useEffect(() => {
    console.log("Current form values:", formValues);
  }, [formValues]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-sm">
          Login Form 🔐
        </h1>
        <form onSubmit={handleSubmit(SubmiHandler)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example: someone@example.com"
              className={`
                w-full px-4 py-3 border rounded-lg shadow-sm text-lg text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.Email ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}
                transition duration-200 ease-in-out
              `}
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.Email && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.Email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className={`
                w-full px-4 py-3 border rounded-lg shadow-sm text-lg text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${errors.Password ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}
                transition duration-200 ease-in-out
              `}
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must not exceed 20 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must include uppercase, lowercase, number, and special character",
                },
              })}
            />
            {errors.Password && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.Password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold text-lg py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};