import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h1 className="text-2xl font-bold ">Recipe Calories</h1>
      </div>
      <div>
        <ul className="flex gap-8 text-blue-500 font-bold">
          <li>Home</li>
          <li>Recipe</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="search Here"
          className=" bg-slate-300 rounded-2xl pl-3 pt-1 pb-1"
        ></input>
        <i>
          <a href="">
            <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          </a>
        </i>
      </div>
    </div>
  );
};

export default Header;
