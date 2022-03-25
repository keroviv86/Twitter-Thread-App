import React, { useState } from "react";


function SignUpForm({ onLogin, name, setName, password, setPassword }) {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [input, setInput] = useState({
    passwordConfirmation: "",
    interest: "",
    location:"",
    profile_photo: ""
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: input["passwordConfirmation"],
        interest: input["interest"],
        location: input["location"],
        profile_photo: input["profile_photo"]
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function onInputChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  return (
  <div className="button">
   <div className="form-group"> 
    <form onSubmit={handleSubmit}>
        <label>
          Username
          <input class="inputField" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
         Password
        <input class="inputField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label>
         Password Confirmation
        <input class="inputField" type="password" name="passwordConfirmation" value={input["passwordConfirmation"]} onChange={onInputChange} />
        </label>

        <label>
         Interest
        <input class="inputField" type="text" name="interest" value={input["interest"]} onChange={onInputChange} />
        </label>

        <label>
         Location
        <input class="inputField" type="text" name="location" value={input["location"]} onChange={onInputChange} />
        </label>

        <label>
        Profile Image URL
        <input class="inputField" type="text"name="profile_photo"  value={input["profile_photo"]} onChange={onInputChange} />
        </label>
        

        <button class="btn btn-signup" type="submit"> {isLoading ? "Loading..." : "Sign Up"}</button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
       
    </form>
    </div>
    </div>
  );
}

export default SignUpForm;