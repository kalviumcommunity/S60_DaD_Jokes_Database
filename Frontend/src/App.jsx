import AddJokes from "./Components/AddJokes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import UpdateJokes from "./Components/UpdateJokes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* <Route path="/" element={<Users />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add" element={<AddJokes />} />
            <Route path="/update/:id" element={<UpdateJokes />} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
