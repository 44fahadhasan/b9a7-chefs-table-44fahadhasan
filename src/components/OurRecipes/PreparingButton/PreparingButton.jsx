import PropTypes from "prop-types";

const PreparingButton = ({
  handelAddCurrentCooking,
  recipe,
  handelRemoveRecipeOnWantToCart,
}) => {
  const { recipe_id } = recipe;
  return (
    <button
      onClick={() => {
        handelAddCurrentCooking(recipe, recipe_id);
        handelRemoveRecipeOnWantToCart(recipe_id);
      }}
      className="btn btn-primary"
    >
      Preparing
    </button>
  );
};

PreparingButton.propTypes = {
  handelAddCurrentCooking: PropTypes.func.isRequired,
  handelRemoveRecipeOnWantToCart: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default PreparingButton;
