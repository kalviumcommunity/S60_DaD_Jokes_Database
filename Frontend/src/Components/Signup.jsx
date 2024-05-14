import { useState } from "react";
import finalHappy from "../assets/finalHappy.gif";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/signup", { name, email, password })
      .then((res) => {
        console.log(res);
        if (res.data.alert) {
          alert("Successfully SignedIn");
        } else {
          navigate("/users");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-neutral-950 rounded-lg shadow-md p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
            <img src={finalHappy} className="w-12 mb-1" alt="happy_happy_gif" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex mb-4">
              <input
                placeholder="First Name"
                className="bg-neutral-900 w-full text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <input
              placeholder="Email"
              className="bg-neutral-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              className="bg-neutral-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-white mt-4">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Login
              </Link>
            </p>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;