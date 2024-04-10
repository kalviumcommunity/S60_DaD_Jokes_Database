import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddJokes() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [joke, setJoke] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/add", { name, email, joke })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <input
                required="required"
                className="inp"
                onChange={(e) => setName(e.target.value)}
              />
              <span className="content">Name</span>
            </div>
            <div className="container">
              <input
                required="required"
                className="inp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="content">Email</span>
            </div>
            <div className="container joke">
              <input
                required="required"
                className="inp"
                onChange={(e) => setJoke(e.target.value)}
              />
              <span className="content">Add Joke</span>
            </div>
            <button type="submit">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJokes;
