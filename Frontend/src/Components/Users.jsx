import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/deleteUser/${id}`)
      .then(() => {
        // setUsers(result.data);
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Nav />
      <div className="text-white flex-col bg-neutral-900 flex justify-center items-center ">
        <div>
          <div>
            {users &&
              users.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" border py-8 px-10 m-auto rounded-xl w-6/12 mt-4 "
                  >
                    <div className="flex justify-between">
                      <p className="pl-4"> {item.name}</p> <p>{item.email}</p>
                    </div>
                    <div className="p-4 mr-48 ">{item.joke}</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Link to={`/update/${item._id}`}>
                          <button className="hover:bg-sky-600">Update </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
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
