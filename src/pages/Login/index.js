import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginUser } from '../../apicalls/user';
import Button from '../../components/Button';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const login = async () => {
    try{
      const token = await LoginUser(user);
      console.log(token)
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className='flex justify-center h-screen items-center bg-primary'
    >
      <div className='bg-white p-5 w-[450px]'>
        <div className="flex flex-col gap-5">
          <h1 className='text-2xl font-bold text-center uppercase cursor-pointer text-primary'>
            Login
          </h1>
          <input type='email'
            placeholder='Enter email here'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input type='password'
            placeholder='Enter password here'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <Button title="Login" onClick={login}
            disabled={user.email.length < 3 || user.password.length < 3} />
          <Link to="/register" className='text-center text-primary'>
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login