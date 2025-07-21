import React from 'react'

const Signup = () => {
  return (
     <form
      action="http://localhost:8080/signup"
      method="post"
      className="flex flex-col gap-[1.5rem] py-[1rem]"
    >
      <div className="rounded-md flex w-full">
        <span className="h-full bg-gray-200 rounded-l-md py-[0.5rem] w-[3rem]">
          <img className="h-full bg-cover" src="./media/flag.png" alt="" />
        </span>
        <input
          required
          className="bg-gray-100 outline-0 rounded-r-md flex-1 py-[0.5rem] px-[1rem]"
          type="number"
          placeholder="(+91) XXX-XXX-XXXX"
          name="mobileNumber"
        />
      </div>

      <input
        required
        className="bg-gray-100 outline-0 rounded-md py-[0.5rem] px-[1.5rem]"
        type="text"
        placeholder="Enter user name"
        name="name"
      />
      <input
        required
        className="bg-gray-100 outline-0 rounded-md py-[0.5rem] px-[1.5rem]"
        type="password"
        placeholder="Enter password"
        name="password"
      />

      <button className="bg-blue-600 text-white py-[0.5rem] rounded-md font-[500]">
        Signup 
      </button>
    </form>
  )
}

export default Signup