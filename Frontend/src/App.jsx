import AddJokes from "./Components/AddJokes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import UpdateJokes from "./Components/UpdateJokes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add" element={<AddJokes />} />
            <Route path="/update/:id" element={<UpdateJokes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
