import { response } from 'express';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/user';
import Button from '../../components/Button';

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const register = async () => {

    debugger
    try{
      const response = await RegisterUser(user);
      if(response.success){
        toast.success(response.message);
      }
      else{
        toast.error(response.message)
      }
    }
    catch(error){
      toast.error(response.message);
    }
  }
  return (
    <div className='flex justify-center h-screen items-center bg-primary'
    >
      <div className='bg-white p-5 w-[450px]'>
        <div className="flex flex-col gap-5">
          <h1 className='text-2xl font-bold text-center uppercase cursor-pointer text-primary'>
            Register
          </h1>
          <input type='text'
            placeholder='Enter text here'
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
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
          <Button title="Register" onClick={register} 
          />
          <Link to="/login" className='text-center text-primary'>
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register