import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/header/header";
import Banner from "./Component/banner/banner";
import Recp from "./Component/Recipe_title/recipe";
import NewRecip from "./Component/Add_recip/Add_recip";
import NewRes from "./Component/new_res/newres";
import Cart from "./Component/side_part/cart";
import Marked from "./Component/marked/marked";
import Footer from "./Component/footer/footer";
import CRT from "./Component/currentlycook/crt";

function App() {
  const [carts , allcarts] = useState([]);
  const handlecart = NewRecip =>{
      const newcart = [...carts,NewRecip]
      allcarts(newcart);
  }

  const [prep, setprep] = useState([]);
  const handleprep = NewRecip => {
    const allset = [...prep, NewRecip];
    setprep(allset);
  };

  return (
    
    <>
      <div className="body-st">
        <Header></Header>
        <Banner></Banner>
        <Recp></Recp>
        <div className="flex">
        <NewRecip handlecart={handlecart} ></NewRecip>
        <div>
        <div>
        <Cart carts={carts} handleprep ={handleprep}></Cart>
        <CRT prep={prep}></CRT>
        </div>
        

        </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
