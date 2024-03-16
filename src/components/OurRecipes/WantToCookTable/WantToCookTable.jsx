import PropTypes from "prop-types";
import TableCaptionHead from "../TableCaptionHead/TableCaptionHead";
import TableData from "../TableData/TableData";

const WantToCookTable = ({
  addRecipeToWantToCart,
  handelAddCurrentCooking,
  handelRemoveRecipeOnWantToCart,
}) => {
  return (
    <div>
      <table className="table border-collapse">
        <TableCaptionHead
          title={`Want to cook: ${addRecipeToWantToCart.length}`}
        />
        <tbody>
          {addRecipeToWantToCart.map((recipe, idx) => (
            <TableData
              recipe={recipe}
              recipeNumber={idx}
              key={idx}
              button={true}
              handelAddCurrentCooking={handelAddCurrentCooking}
              handelRemoveRecipeOnWantToCart={handelRemoveRecipeOnWantToCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

WantToCookTable.propTypes = {
  addRecipeToWantToCart: PropTypes.array.isRequired,
  handelAddCurrentCooking: PropTypes.func.isRequired,
  handelRemoveRecipeOnWantToCart: PropTypes.func.isRequired,
};

export default WantToCookTable;
