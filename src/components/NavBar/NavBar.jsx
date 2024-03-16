import { FaRegCircleUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="navbar lexend">
      <div className="flex-1">
        <a className="text-[#150B2B] text-3xl font-bold">Rare Relish</a>
      </div>
      <div className="flex mr-[14%]">
        <ul className="text-[#150B2BB2] text-base menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="gap-4">
        <div className="bg-[#150B2B0D] flex gap-4 items-center rounded-full pl-4">
          <LuSearch className="text-xl text-[#150B2BB2]" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent rounded-full py-2 text-[#150B2BB2] text-base "
          />
        </div>
        <div className=" btn btn-circle bg-[#4a00ff] hover:bg-[#4a00ff]">
          <FaRegCircleUser className="text-3xl text-[#d1dbff]" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
