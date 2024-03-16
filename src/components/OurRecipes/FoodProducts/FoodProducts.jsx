import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FoodProduct from "../FoodProduct/FoodProduct";
const FoodProducts = ({ handelWantToCook }) => {
  const [recipes, setRescipes] = useState([]);

  // load recipes all data
  useEffect(() => {
    fetch("./public/recipeData.json")
      .then((res) => res.json())
      .then((data) => setRescipes(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-7 sm:w-[60%] order-2 sm:order-none">
      {recipes.map((recipe, indx) => (
        <FoodProduct
          handelWantToCook={handelWantToCook}
          key={indx}
          recipe={recipe}
        />
      ))}
    </div>
  );
};

FoodProducts.propTypes = {
  handelWantToCook: PropTypes.func.isRequired,
};

export default FoodProducts;
