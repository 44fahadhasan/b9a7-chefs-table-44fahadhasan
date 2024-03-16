import PropTypes from "prop-types";
import { AiOutlineFire } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";

const FoodProduct = ({ recipe, handelWantToCook }) => {
  const {
    recipe_id,
    recipe_img,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="fira-sans">
      <div className="rounded-lg border p-6">
        <figure>
          <img
            className="rounded-lg h-[200px] w-full object-cover"
            src={recipe_img}
            alt={recipe_name}
          />
        </figure>
        <div className="space-y-3">
          <h2 className="lexend text-[#282828] text-xl font-semibold mt-5">
            {recipe_name}
          </h2>
          <p className=" text-[#878787] text-base">{description}</p>
          <div className="border-y py-5 ">
            <h4 className="lexend text-[#282828] text-lg font-medium">
              Ingredients: {ingredients.length}
            </h4>
            <div className="mt-2">
              <ul className="text-[#878787] text-lg list-disc pl-7">
                {ingredients.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="flex gap-1 items-center text-[#282828CC] ">
              <CiClock2 className="text-1xl font-bold" />
              <p className="text-base">{preparing_time} minutes</p>
            </div>
            <div className="flex gap-1 items-center">
              <AiOutlineFire />
              <p className="text-[#282828CC] text-base">{calories} calories</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => handelWantToCook(recipe, recipe_id)}
              className="btn btn-primary mt-2"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodProduct.propTypes = {
  recipe: PropTypes.object.isRequired,
  handelWantToCook: PropTypes.func.isRequired,
};

export default FoodProduct;
