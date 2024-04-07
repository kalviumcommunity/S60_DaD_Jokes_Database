import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/jokes")
      .then((response) => {
        // console.log(joke)÷
        // console.log(response.data.data);
        setJoke(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);
  return (
    <div>
      <div>
        {joke.map((data, index) => (
          <div key={index}>
            <p>{data.joke}</p>
            <p>- {data.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
