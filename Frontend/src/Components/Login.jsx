import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import happy from "../assets/happy.gif";
import { Link } from "react-router-dom";
import sad from "../assets/sad.gif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [displayedImage, setDisplayedImage] = useState(happy);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((res) => {
        console.log(res);
        document.cookie = `email=${email}; expires= Thu, 30 May 2999 12:00:00 UTC`;
        document.cookie = `password=${password}; expires=Thu, 30 May 2999 12:00:00 UTC`;
        if (res.data.shouldLogin) {
          navigate("/users");
          setDisplayedImage(happy);
        } else {
          setDisplayedImage(sad);
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-neutral-950 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
          <img className="w-12 pb-3" src={displayedImage} alt="laugh_gif" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-neutral-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-neutral-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />
          <div>
            <p className="text-white ml-1">
              {" "}
              Don't have an account?{" "}
              <Link
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                to="signup"
              >
                Signup
              </Link>
            </p>
          </div>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;