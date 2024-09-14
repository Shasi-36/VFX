import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const LoginPage = () => {
  
  const [show,setShow]=useState(false)
    const [data,setdata] = useState({
      email: '',
      password:''
    })
    const {email, password} = data;
    const changeHander= e =>{
      setdata({...data,[e.target.name]:e.target.value})
    }
const clickHandler=(e)=>{
  setShow(!show)
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
        <div className="formboxlgn">

    <form className='signup' onSubmit={submitHandler}>
      <h1>Register</h1>
      <div className="inputbox">

      
      <div className="input">
      <MdEmail />
      <input type="text" name="email" value={email} placeholder="enteremail" onChange={changeHander}/>
      </div>
      <div className="input">
      <TbPassword />
      <input type={show ? "text":"password"} name="password" value={password} placeholder="enterpassword" onChange={changeHander}/>
      <span className="eyeicon" onClick={clickHandler}>
     { show ? <IoMdEyeOff />:<IoMdEye />}
      </span>
      
      </div>
     
      <button type='button'>Signup</button>
      </div>
      <div className='lnspan'>
      <span>Not Yet Register?<Link to='/register' >Register</Link></span>
      </div>
    </form>
        </div>
      </div>
  )
}

export default LoginPage
