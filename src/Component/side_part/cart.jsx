import Marked from "../marked/marked";
import "./cart.css";
const Cart = ({ carts , handleprep , clearCart}) => {
  return (
    <div className="size bg-slate-100 mt-14 ml-14 rounded-xl pb-10">
      <h1 className="text-center text-2xl font-bold pt-5 pb-5">
        Want to Cook : {carts.length}
      </h1>
      <h2 className="text-center font-bold">If you press the button button will be disabled</h2>
      <hr className="ml-20 mr-20 bg-black mb-5 "></hr>
      <div className="flex gap-20  text-l font-bold">
        <div className="flex gap-52 ml-20 text-l font-bold ">
          <h2>Name</h2>
          <h2>Time</h2>
        </div>
        <h2>Calories</h2>
      </div>
      <div className="ml-20">
        {carts.map((mark) => (
          <Marked handleprep={handleprep} clearCart={clearCart} mark={mark}></Marked>
        ))}
      </div>
    </div>
  );
};

export default Cart;
