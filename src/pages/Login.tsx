import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/auth";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event: FormEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const handlePassword = (event: FormEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      await signin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>
          Sign in to <Link to="/">chat</Link>
        </h1>
        <p>Fill in the form below to log in</p>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            onChange={handlePassword}
            value={password}
          />
        </label>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Sign In</button>
        </div>
        <p>
          Don't have an account yet? Let's <Link to="/signup">create</Link> one
        </p>
      </form>
    </div>
  );
};

export default Signin;
