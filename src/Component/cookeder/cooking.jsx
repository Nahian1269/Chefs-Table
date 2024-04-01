const Cooking = ({mock}) =>{
    const { recipe_name, preparing_time, calories , recipe_id } = mock;

    return(
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
    </div>
    )
}

export default Cooking