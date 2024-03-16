import PropTypes from "prop-types";

import { useState } from "react";
import CurrentlyCookingTable from "../CurrentlyCookingTable/CurrentlyCookingTable";
import WantToCookTable from "../WantToCookTable/WantToCookTable";

const ProductCart = ({
  addRecipeToWantToCart,
  handelRemoveRecipeOnWantToCart,
}) => {
  const [addCurrentCooking, setAddCurrentCooking] = useState([]);

  const handelAddCurrentCooking = (recipe) => {
    setAddCurrentCooking([...addCurrentCooking, recipe]);
  };

  return (
    <div className="fira-sans">
      <WantToCookTable
        addRecipeToWantToCart={addRecipeToWantToCart}
        handelAddCurrentCooking={handelAddCurrentCooking}
        handelRemoveRecipeOnWantToCart={handelRemoveRecipeOnWantToCart}
      />
      <CurrentlyCookingTable addCurrentCooking={addCurrentCooking} />
    </div>
  );
};

ProductCart.propTypes = {
  addRecipeToWantToCart: PropTypes.array.isRequired,
  handelRemoveRecipeOnWantToCart: PropTypes.func.isRequired,
};

export default ProductCart;
