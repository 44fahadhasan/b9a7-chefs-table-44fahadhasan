import PropTypes from "prop-types";
import PreparingButton from "../PreparingButton/PreparingButton";

const TableData = ({
  button,
  recipe = {},
  recipeNumber,
  handelAddCurrentCooking,
  handelRemoveRecipeOnWantToCart,
}) => {
  const { recipe_name, preparing_time, calories } = recipe;

  return (
    <>
      <tr className="text-[#282828B2] text-base ">
        <th className="text-[#282828CC] font-semibold">{recipeNumber + 1}</th>
        <td className="p-0">{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <td className="p-0">
          {button && (
            <PreparingButton
              handelAddCurrentCooking={handelAddCurrentCooking}
              handelRemoveRecipeOnWantToCart={handelRemoveRecipeOnWantToCart}
              recipe={recipe}
            />
          )}
        </td>
      </tr>
    </>
  );
};

TableData.propTypes = {
  button: PropTypes.bool.isRequired,
  recipe: PropTypes.object.isRequired,
  recipeNumber: PropTypes.number.isRequired,
  handelAddCurrentCooking: PropTypes.func,
  handelRemoveRecipeOnWantToCart: PropTypes.func.isRequired,
};

export default TableData;
