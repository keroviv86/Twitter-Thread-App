import React, { useState } from "react";


function SignUpForm({ onLogin, name, setName, password, setPassword }) {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        password_confirmation: passwordConfirmation
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

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
         Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label>
         Password Confirmation
        <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </label>

        <button type="submit"> {isLoading ? "Loading..." : "Sign Up"}</button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
       
    </form>
  );
}

export default SignUpForm;