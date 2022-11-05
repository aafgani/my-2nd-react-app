import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../../redux/features/cocktailSlice";
import { useSelector, useDispatch } from "react-redux";

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector((state) => ({
    ...state.cocktailApp,
  }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [id]);
  useEffect(() => {
    if (cocktail.length) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <h2>No Cocktail to Display</h2>;
  } else {
    const { name, image, info, glass, instructions, ingredients } =
      modifiedCocktail;
    return (
      <>
        <p>{name}</p>
      </>
    );
  }
};

export default SingleCocktail;
