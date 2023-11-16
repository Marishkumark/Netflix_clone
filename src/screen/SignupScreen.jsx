import React, { useRef, useState } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [sign, setSign] = useState(false);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>{!sign ? "Sign Up" : "Sign In"}</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        {!sign ? (
          <button type="submit" onClick={register}>
            Sign up
          </button>
        ) : (
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        )}
        {!sign ? (
          <h4>
            <span className="signupScreen__gray">
              Already have an account?{" "}
            </span>
            <span className="signupScreen__link" onClick={() => setSign(true)}>
              Sign in
            </span>
          </h4>
        ) : (
          <h4>
            <span className="signupScreen__gray">New to Netflix? </span>
            <span className="signupScreen__link" onClick={() => setSign(false)}>
              Sign up
            </span>
          </h4>
        )}
      </form>
    </div>
  );
};

export default SignupScreen;
