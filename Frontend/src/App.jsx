import AddJokes from "./Components/AddJokes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import UpdateJokes from "./Components/UpdateJokes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";
import Filter from "./Components/Filter";

function App() {
  const [filteredName, setFilteredName] = useState("all");
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* <Route path="/" element={<Users />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users filteredName={filteredName} setFilteredName={setFilteredName} />} />
            <Route path="/add" element={<AddJokes />} />
            <Route path="/update/:id" element={<UpdateJokes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/filter" element={<Filter setFilteredName={setFilteredName}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
