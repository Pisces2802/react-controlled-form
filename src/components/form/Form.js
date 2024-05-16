import React, { useEffect } from 'react'
import { useState } from 'react'
import "./form.css"

export default function Form() {
    // const [username, setUsername] = useState()
    // const [password, setPassword] = useState("")

       const [error, setError] = useState(false)

    const formState = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(formState)
   

    function handleInputChange(event) {
      
            // setFormData((previousData) => ({
            //     ...previousData,
            //       [event.target.name]: event.target.value
            // }))
            // console.log(formData)

            setFormData(function (prevData) {
                console.log(formData)
             return    {
                   ...prevData,
                    [event.target.name] : event.target.value
                 }
            })
    }



    function submitFormHandler (event) {
        event.preventDefault()
        if(formData.username === "") {
            setError(true)
        } else {
            setError(false)
            alert('form submitted 👌')
        }

    }

   


    useEffect(() => {
        console.log('I re-rendered')
    },[formData])

    // function handlePasswordChange() {
           
    // }

  return (

    <div>
        <form onSubmit={submitFormHandler} className='form border-gradient border-gradient-purple'>
            <div>
                <label htmlFor="username"></label>
                <input type="text" id="username" placeholder='username' name="username"  value={formData.username} onChange={handleInputChange}/>  
            </div>
            {error ? <p style={{color: "red"}}>{"username cannot be empty"}</p> : "" }
              <div>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder='password' value={formData.password} onChange={handleInputChange}/>  
            </div>
            
            <button className='btn'>Login</button>
        </form>

        <p className='show-value'>username: {formData.username}</p>
        <p className='show-value'>password:  {formData.password}</p> 
    </div>
        
  )
}
