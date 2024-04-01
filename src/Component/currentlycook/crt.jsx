import Cooking from "../cookeder/cooking";

const CRT = ({ prep }) => {
  return (
    <div>
      <div className="size bg-slate-100 mt-14 ml-14 rounded-xl pb-10">
        <h1 className="text-center text-2xl font-bold pt-5 pb-5">
          Currently cooking : {prep.length}
        </h1>
        <hr className="ml-20 mr-20 bg-black mb-5 "></hr>
        <div className="flex gap-20  text-l font-bold">
          <div className="flex gap-52 ml-20 text-l font-bold ">
            <h2>Name</h2>
            <h2>Time</h2>
          </div>
          <h2>Calories</h2>
        </div>
        <div className="ml-20">
            {
                prep.map(mock => <Cooking mock={mock}></Cooking>)
            }
        </div>
      </div>
    </div>
  );
};

export default CRT;
