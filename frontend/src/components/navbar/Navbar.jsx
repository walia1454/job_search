import { useNavigate,Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="w-full bg-white flex text-black shadow-sm justify-end items-center h-16">
      <div className="navItems pr-12 md:pr-20">
        <Link to="/createJob"
          className="px-3 py-2 border rounded-md mr-2 bg-green-700  text-white hover:border-gray-600 transition-all duration-300 "
          
        >
          Create New Job
        </Link>
        {/* <button
          className="px-3 py-2 border rounded-md text-gray-600 hover:border-gray-600 hover:text-gray-700 transition-all duration-300 "
          onClick={logOutHandler}
        >
          Log out
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
