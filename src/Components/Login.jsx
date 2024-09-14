import React, { useState } from 'react'

const LoginForm = () => {

    
    const [data,setdata] = useState({
        email: '',
        password:'',
      })
      const { email, password} = data;
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
        
        <div className='Box'>
    
      <form onSubmit={submitHandler}>
    
        <input type="text" name="email" value={email} placeholder="enteremail" onChange={changeHander}/>
        <input type="text" name="password" value={password} placeholder="enterpassword" onChange={changeHander}/>
        <input type="Submit" name="Submit"/>
      </form>
    
        </div>
      );
}

export default LoginForm
