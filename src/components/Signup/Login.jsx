import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({mobileNumber: undefined, password: ""});

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/login', {
        mobileNumber: userDetail.mobileNumber,
        password: userDetail.password
      });

      if (res.data.credentials) {
        window.location.href = `http://localhost:5174/?mobile=${userDetail.mobileNumber}`;
      } else {
        alert("Bad credentials.");
      }
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };
  return (
    <form
      action="http://localhost:8080/login"
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
          value={userDetail.mobileNumber}
          onChange={(e) => setUserDetail(prev => ({ ...prev, mobileNumber: e.target.value }))}
        />
      </div>

      <input
        required
        className="bg-gray-100 outline-0 rounded-md py-[0.5rem] px-[1.5rem]"
        type="password"
        placeholder="Enter password"
        name="password"
        value={userDetail.password}
        onChange={(e) => setUserDetail(prev => ({ ...prev, password: e.target.value }))}
      />

      <button onClick={handleLogin} className="bg-blue-600 text-white py-[0.5rem] rounded-md font-[500]">
        Login
      </button>
    </form>
  )
}

export default Login