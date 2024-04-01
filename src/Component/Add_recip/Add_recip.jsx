import { useEffect, useState } from "react"
import NewRes from "../new_res/newres";

const NewRecip = ({handlecart}) => {
    const [food , usefood ] = useState([]) ; 
    useEffect (() =>{
        fetch('DB.json')
        .then(res => res.json())
        .then(data => usefood(data))
    },[])
    return(
        <div className="grid grid-cols-2 mt-3 gap-6">
        {
            food.map(food =><NewRes  handlecart ={handlecart} food={food} ></NewRes>)
        }
            
        </div>
    )
}
export default NewRecip