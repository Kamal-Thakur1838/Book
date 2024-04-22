import React from 'react';

const Connect = () => {
  return (
    <>
     <div className='flex items-center justify-center align-middle h-screen'>
        <div className=' flex items-center justify-center align-middle m-5 p-5 w-[600px]' >
        <form method="dialog  ">          
          <h1 className="font-bold text-lg text-3xl">Contact Us</h1>
          <div className="mt-4 space-y-2" >
            <span>Name</span> <br />
            <input type="text"
            placeholder="Enter Your Name"
            className="w-80  px-3 py-1 border rounded-md outline-none"
            />
        </div>

        <div className="mt-4 space-y-2" >
            <span>E-mail</span> <br />
            <input type="email"
            placeholder="Enter Your E-mail"
            className="w-80  px-3 py-1 border rounded-md outline-none"/>
        </div>

        <div className="mt-4 space-y-2" >
            <span>Message</span> <br />
            <textarea rows={4} cols={35}
            placeholder="Enter Your Message"
            className="w-80 px-3 py-1 border rounded-md outline-none"/>
        </div>

        <div className="flex mt-4">
            <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200 "> Submit </button>
        </div>
        </form>
        </div>
        </div>
    </>
  )
}

export default Connect