import { useState, useEffect } from "react";
import axios from "axios";
import happy from "../assets/happy.gif";
import { Link } from "react-router-dom";

function Filter() {
  const [choosenName, setChoosenName] = useState([]);
  const [filteredName, setFilteredName] = useState("all");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        console.log(response.data);
        setChoosenName(response.data);
        setData(response.data); // Set data state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilter = (e) => {
    console.log(e.target.value);
    setFilteredName(e.target.value);
  };

  useEffect(() => {
    handleFilteredName();
  }, [filteredName, choosenName]);

  const handleFilteredName = () => {
    console.log(filteredName);

    if (filteredName === "all") {
      setData(choosenName);
    } else {
      const newData = choosenName.filter((user) => {
        return user.createdBy === filteredName;
      });
      setData(newData);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-neutral-950 py-6 border flex border-x-0 border-t-0 justify-between items-center">
          <div className="ml-5 flex items-end">
            <img className="w-14 font-head" src={happy} alt="laugh_gif" />
            <p className="text-white">DaDJokesDatabase</p>
          </div>
          <div className="flex w-96 justify-around mr-2 mt-5">
            <div className="hover:text-cyan-400 text-white cursor-pointer">
              <Link to="/users">Home</Link>
              </div>
            <select name="filter" className="p-1" id="" onChange={handleFilter}>
              <option value="all">All</option>
              {choosenName.map((user) => {
                return (
                  <option
                    className="text-white"
                    key={user._id}
                    value={user.createdBy}
                  >
                    {user.createdBy}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" border m-auto py-8 px-10 rounded-xl w-6/12 mt-4 text-white "
                >
                  <div className="flex justify-between">
                    <p className="pl-4"> {item.createdBy}</p>{" "}
                    <p>{item.email}</p>
                  </div>
                  <div className="p-4 mr-52 ">{item.joke}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
