import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [data,setdata] = useState({
        username:'',
        email: '',
        password:'',
        confirmpassword:'',
      })
      const {username, email, password, confirmpassword} = data;
      const changeHander= e =>{
        setdata({...data,[e.target.name]:e.target.value})
      }
      const submitHandler = e => {
        e.preventdefault();
        if (username.length <= 5) {
          alert ("username atleast 5 letters");
        }
        else if (password !== confirmpassword){
          alert("password not matching")
        }
    else {
      console.log(data)
    }
      }
      return (
        <div className='formcontainer'>
          <div className="formbox">

      <form className='signup' onSubmit={submitHandler}>
        <h1>Register</h1>
        <div className="inputbox">

        <div className="input">
        <FaUser />
        <input type="text" name="username" value={username} placeholder="enterusername" onChange={changeHander}/>
        </div>
        <div className="input">
        <MdEmail />
        <input type="text" name="email" value={email} placeholder="enteremail" onChange={changeHander}/>
        </div>
        <div className="input">
        <TbPassword />
        <input type="text" name="password" value={password} placeholder="enterpassword" onChange={changeHander}/>
        </div>
        <div className="input">
        <  TbPassword />
        <input type="text" name="confirmpassword" value={confirmpassword} placeholder="enterconfirmpassword" onChange={changeHander}/>
        </div>
        <button type='button'>Signup</button>
        </div>
        <div className='lnspan'>
        <span>Aready have an account?<Link to='/login' >Login</Link></span>
        </div>
        
      </form>
     
          </div>
        </div>
      );
}

export default Registration
