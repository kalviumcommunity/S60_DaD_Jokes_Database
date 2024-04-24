import happy from "../assets/happy.gif";
import { Link } from "react-router-dom";

function Nav() {
  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleClick = () => {
    deleteCookie("email");
    deleteCookie("password");
    // setLogin(false);
    console.log("KO");
  };
  return (
    <div>
      <div className="bg-neutral-950 py-6 border flex border-x-0 border-t-0 justify-between">
        <div className="ml-5 flex items-end">
          <img className="w-14 font-head" src={happy} alt="laugh_gif" />
          <p className="text-white">DaDJokesDatabase</p>
        </div>
        <div className=" flex justify-end w-full">
          <div className="text-white flex w-96 justify-around mr-1 mt-5">
            <div className="hover:text-cyan-400 cursor-pointer">Home</div>
            <Link to="/add" className="hover:text-green-300">
              Add your joke
            </Link>
            <div>
              <Link
                className="hover:text-cyan-400"
                to="/"
                onClick={handleClick}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
