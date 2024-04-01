import { useState } from "react";
import CRT from "../currentlycook/crt";
import "./marked.css";

const Marked = ({ mark, handleprep }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = mark;



  const [isClicked, setIsClicked] = useState(false);
  const newhandler =() =>{
    handleprep(mark) ;
    setIsClicked(true);
  }

  return (
    <div className="font-bold pt-12 pb-12">
      <div className="contain-size -ml-7">
        <h3>{recipe_id}</h3>
      </div>
      <div>
        <h3>{recipe_name}</h3>
      </div>
      <div className="contain-size pl-64 -mt-10">
        <h3>
          {preparing_time}
          <br></br>Minutes
        </h3>
      </div>
      <div className="contain-size pl-96 ">
        <h3>
          {calories}
          <br></br>Minutes
        </h3>
      </div>
      <div className="contain-size all -mt-2">
        <button
          onClick={newhandler} disabled={isClicked}
          className=" bg-green-500 pl-7 pr-7 pt-5 pb-5 rounded-full"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

export default Marked;
