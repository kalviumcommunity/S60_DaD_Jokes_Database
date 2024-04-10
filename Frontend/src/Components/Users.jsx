import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="bg-neutral-950 py-6 border flex border-x-0 border-t-0 justify-between">
        <div>
          <img src="" alt="" />
        </div>
        <div className=" flex justify-end w-full">
          <div className="text-white flex w-96 justify-around mr-10">
            <div>Home</div>
            <Link to="/add">Add your joke</Link>
            <div>About</div>
          </div>
        </div>
      </div>
      <div className="text-white flex-col bg-neutral-900 flex justify-center items-center ">
        <div>
          <div>
            {users.map((item, index) => {
              return (
                  <div
                    key={index}
                    className=" border py-8 px-10 m-5 rounded-xl"
                  >
                    <div className="flex justify-between">
                      {item.name} <p>{item.email}</p>
                    </div>
                    <div>{item.joke}</div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
