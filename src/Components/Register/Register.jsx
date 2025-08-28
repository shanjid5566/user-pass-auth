import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.init";
import { useState } from "react";
import {FaRegEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPass, setShowPass] = useState(false)
  const handleRegistation = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setErrorMsg("");
    setSuccessMsg("");
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
      setErrorMsg(
        "At least one upperCase one lower case one special carecter one number and at least 8 charecter"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setSuccessMsg("Registation Successful");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegistation} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              className="input"
              name="password"
              placeholder="Password"
            />
            <button onClick={()=>setShowPass(!showPass)} className="absolute top-4 right-7">
                {showPass ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          {successMsg && <p className="text-green-500">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
