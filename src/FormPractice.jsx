import { useState } from "react";
import "./form.css"

function FormPractice() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name)
    
    const value = event.target.value;
    if(name==='age'){
        if(value<18){
            console.log("this is error u age 18+")
        }
        else {
            console.log('you passed')
        }

    }
    console.log("===",value)
    setInputs(values => ({...values, [name]: value}))
  }

  console.log("====>dlm",inputs)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate ()){
        console.log(inputs);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["phnumber"] = "";
        this.setInputs({input:input});
  
        alert('Demo Form is submited');
    }
  }
    
 function validate() {
   
    let input = inputs;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
     
    if (typeof input["phnumber"] !== "undefined") {

         var pat= new RegExp(/^[0-9\b]+$/);
      
        if (!pat.test(input["phnumber"])) {
      
          isValid = false;
      
          errors["phnumber"] = "Please enter only number.";
      
        } else if(input["phnumber"].length !== 10){
      
          isValid = false;
      
          errors["phnumber"] = "Please enter valid phone number.";
      
        }
      
      }
    setInputs({
      errors: errors
    });

    return isValid;
  }

  return (
    <div className="form"><h1>Form</h1>
    <div className="flex-container">
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username"
        pattern="[a-zA-Z]{1,}" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <div>{inputs.errors?.username?inputs.errors.usename:null}</div>
      </label><br />
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

export default FormPractice