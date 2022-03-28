import React, { useState } from "react";

function SignUpForm({ setShowLogin }) {
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [input, setInput] = useState({
    name: "",
    password: "",
    interest: "",
    description: "",
    location: "",
    profile_photo: "",
  });

  const [errors, setErrors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input["name"],
        password: input["password"],
        interest: input["interest"],
        description: input["description"],
        location: input["location"],
        profile_photo: input["profile_photo"],
      }),
    })
    .then(res=>res.json())
    .then((r) => {
      
      setIsLoading(false);
      if (!r.errors) {
        // r.json().then((user) => onLogin(user));
        setShowLogin(true)
      } 
      
      else {
        const jsonError = r.errors
        setErrors(jsonError)
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
            <input
              class="inputField"
              type="text"
              name="name"
              value={input["name"]}
              onChange={onInputChange}
            />
          </label>

          <label>
            Password
            <input
              class="inputField"
              type="password"
              name="password"
              value={input["password"]}
              onChange={onInputChange}
            />
          </label>

          <label>
            Interests
            <input
              class="inputField"
              type="text"
              name="interest"
              value={input["interest"]}
              onChange={onInputChange}
            />
          </label>

          <label>
            Location
            <input
              class="inputField"
              type="text"
              name="location"
              value={input["location"]}
              onChange={onInputChange}
            />
          </label>

          <label>
            Profile Image URL
            <input
              class="inputField"
              type="text"
              name="profile_photo"
              value={input["profile_photo"]}
              onChange={onInputChange}
            />
          </label>

          <button class="btn btn-signup" type="submit">
            {" "}
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        {errors?errors.map(e => <div className="error-message">{e}</div>):null}
      </div>
    </div>
  );
}

export default SignUpForm;
