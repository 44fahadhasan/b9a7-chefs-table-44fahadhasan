import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionContent from "../SectionContent/SectionContent";
import FoodProducts from "./FoodProducts/FoodProducts";
import ProductCart from "./ProductCart/ProductCart";

const OurRecipes = () => {
  const [addRecipeToWantToCart, setAddRecipeToWantToCart] = useState([]);

  const handelWantToCook = (recipe, recipeId) => {
    const isAvailableRecipeOnWantToCart = addRecipeToWantToCart.find(
      (allRecipe) => allRecipe.recipe_id === recipeId
    );
    if (!isAvailableRecipeOnWantToCart) {
      setAddRecipeToWantToCart([...addRecipeToWantToCart, recipe]);
      return;
    } else {
      toast("You can not select a single recipe more than once.");
    }
  };

  const handelRemoveRecipeOnWantToCart = (recipeId) => {
    const remaingProduct = addRecipeToWantToCart.filter(
      (allRecipe) => allRecipe.recipe_id !== recipeId
    );
    if (remaingProduct) {
      setAddRecipeToWantToCart(remaingProduct);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="">
        <SectionContent />

        {/* food products & card component */}

        <div className="flex flex-col items-start sm:flex-row gap-7 mt-12 sm:mt-20">
          <FoodProducts handelWantToCook={handelWantToCook} />

          <aside className="sm:w-[40%] order-1 sm:order-none rounded-lg border p-7 sm:sticky sm:top-0">
            <ProductCart
              addRecipeToWantToCart={addRecipeToWantToCart}
              handelRemoveRecipeOnWantToCart={handelRemoveRecipeOnWantToCart}
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default OurRecipes;
