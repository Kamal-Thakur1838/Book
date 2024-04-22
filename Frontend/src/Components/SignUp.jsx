import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
        <div className="w-[400px]">
        <div className="modal-box">
          <form method="dialog w-90"  onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Sign Up</h3>
          <div className="mt-4 space-y-2" >
            <span>FullName</span> <br />
            <input type="text"
            placeholder="Enter Your FullName"
            className="w-70  px-3 py-1 border rounded-md outline-none"
            {...register("name", { required: true })}  /> <br />
              {errors.name && <span className="text-sm text-red-500" >This field is required</span>}
        </div>

        <div className="mt-4 space-y-2" >
            <span>E-mail</span> <br />
            <input type="email"
            placeholder="Enter Your E-mail"
            className="w-70  px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}  /> <br />
              {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
        </div>

        <div className="mt-4 space-y-2" >
            <span>Password</span> <br />
            <input type="password"
            placeholder="Enter Your Password"
            className="w-70 px-3 py-1 border rounded-md outline-none"
            {...register("password", { required: true })}  /> <br />
              {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
        </div>

        <div className="flex justify-around mt-4">
            <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200 "> SignUp </button>
           <p> Have Account <button className="underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}> Login </button> <Login/> </p>
        </div>
        </form>
        </div>
      </div>
        </div>
    </>
  )
}

export default SignUp