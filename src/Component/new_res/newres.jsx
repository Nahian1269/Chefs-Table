import "./newres.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFire } from "@fortawesome/free-solid-svg-icons";
const NewRes = ({ food , handlecart }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = food;




  return (
    <div className="mt-10">
      <div className=" box bg-slate-50 rounded-2xl">
        <div className="flex justify-center pt-10">
          <img className="w-80 h-56 rounded-xl" src={recipe_image}></img>
        </div>
        <h1 className="ml-8 mt-4 text-xl font-bold ">{recipe_name}</h1>
        <p className="ml-8 mr-8 mt-3 text-green-600">{short_description}</p>
        <hr className="ml-5 mr-8 mt-3 bg-black"></hr>
        <h1 className="ml-8 mr-8 text-xl font-bold mt-3">
          Ingredients : {ingredients.length}{" "}
        </h1>
        <ul>
          <li className="ml-8 mr-8 mt-3">
            {ingredients.map((ing) => (
              <li className="" ing={ing}>
                {ing}
              </li>
            ))}
          </li>
        </ul>
        <hr className="ml-5 mr-8 mt-3 bg-black"></hr>
        <div className="flex justify-between ml-8 mr-8 mt-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} />
            <p>{preparing_time} Minutes</p>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFire} />
            <p>{calories}Calories</p>
          </div>
        </div>
        <div className="ml-8 mr-8 mt-3">
          <button onClick={()=>handlecart(food)} className="bg-green-500 pl-5 pr-5 pt-3 pb-3 rounded-full font-bold">
            Want to cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRes;
