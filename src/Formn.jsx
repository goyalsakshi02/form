import { useState } from "react";
import "./form.css"

function Formn() {
  const [inputs, setInputs] = useState({});
//   const [errors, setErros] = useState({})
let errors={};
  const handleChange = (event) => {
    const name = event.target.name;
   
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }

 
  
  
    
  const checkValidation = () => {
      if(!inputs.username){
errors['username']='This field required'
      }else if (!inputs.username.match(/a-Z/)){
        errors['username']='This field required'
      }


      return errors
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValidation();
    console.log("hhhh",inputs)
    console.log("hhhh",errors)
    
  }

  return (
    <div className="form"><h1>Form</h1>
    <div className="flex-container">
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label><br />
      {errors?.username? <span>hlo</span>:null}
      <label>Enter your age:
        <input 
          type="text" 
          name="age" 

          value={inputs.age || ""} 
          onChange={handleChange}
        />
        
        </label><br />
      <label>Enter your email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label><br />
        <label>Enter your Phone.no:
        <input 
          type="text" 
          name="phnumber"
          value={inputs.phnumber || ""} 
          onChange={handleChange}
        />
        </label><br />
        <label>Enter your country:
        <input 
          type="text" 
          name="country" 
          pattern="[a-zA-Z]{1,}" 
          value={inputs.country || ""} 
          onChange={handleChange}
        />
        </label><br />
        <label>Enter your password:
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label><br />

        <input type="submit" />
    </form>
    </div>
    </div>
  )
}

export default Formn