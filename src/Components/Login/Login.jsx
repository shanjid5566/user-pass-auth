import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../../firebase.init";
import { useRef, useState } from "react";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const emailRef = useRef();

  const handleSignIn = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMsg("Login successful");
        console.log(userCredential.user);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  const handleResetpassword = () => {
    const currentEmail = emailRef.current.value;

    if (!currentEmail) {
      console.log("Please provide a valid email");
    } else {
      sendPasswordResetEmail(auth, currentEmail)
        .then(() => {
          // Password reset email sent!
          // ..
          alert("please check your email")
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSignIn} className="fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          ref={emailRef}
          name="email"
          className="input"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <div>
          <a className="link link-hover" onClick={handleResetpassword}>
            Forgot password?
          </a>
        </div>
        <button className="btn btn-neutral mt-4 w-18">Login</button>
      </form>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      {successMsg && <p className="text-green-500">{successMsg}</p>}
    </div>
  );
};

export default Login;
