import prc from "./Rectangle 1.png";
const Banner = () => {
  return (
    <div className="">
      <div className="mt-10 flex justify-center ">
        <img src={prc}></img>
        <div className="absolute">
          <h1 className=" text-white mt-48 leading-snug font-bold text-5xl text-center">
            Discover an exceptional Cooking <br></br>
            class tailored for you!
          </h1>
          <p className="text-center font-semibold text-l text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br></br> problems to become an
            exceptionally well world-class Programmer.
          </p> 
          <div className="flex gap-7 mt-5 justify-center">
            <button className="pt-5 pb-5 pl-7 pr-7 bg-green-500 rounded-full font-bold hover:bg-transparent hover:border-solid hover:border-2 hover:font-bold hover: text-white hover:rounded-full">
              Explore Now
            </button>
            <button className="pt-5 pb-5 pl-7 pr-7 bg-transparent border-solid border-2 font-bold text-white rounded-full  hover:bg-green-400 hover:border-none hover:font-bold">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
