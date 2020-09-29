import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signup, signinWithGoogle } from "../helpers/auth";

const Signup = () => {
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
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const googleSignIn = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          Sign up to <Link to="/">chat</Link>
        </h1>
        <p>Fill in the form below to create an account</p>
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
          <button type="submit">Sign up</button>
        </div>
        <p>Or</p>
        <button onClick={googleSignIn}>Sign up with Google</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
