import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateJokes() {
  const { id } = useParams();
  const [joke, setJoke] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUser/"+id)
      .then((result) => {
        console.log(result)
        setJoke(result.data.joke)
    })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/updateUser/${id}`, { joke })
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
          <form onSubmit={handleUpdate}>
            <div className="container joke">
              <input
                required="required"
                className="inp"
                value={joke}
                onChange={(e) => setJoke(e.target.value)}
              />
              <span className="content">Add Joke</span>
            </div>
            <button type="submit">
              <span>Update</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateJokes;
