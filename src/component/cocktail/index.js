import Box from "@mui/material/Box";
import CustomizedInputBase from "../others/customizedSearch";
import React, { useState, useEffect } from "react";
import SingleCocktail from "./singleCocktail";
import ListCocktail from "./listCocktail";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCocktails } from "../../redux/features/cocktailSlice";

const Cocktail = () => {
  const { cocktails, loading } = useSelector((state) => ({
    ...state.cocktailApp,
  }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strGlass, strDrinkThumb } = item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    console.log("loading...");
  }

  const searchHandler = (str) => {
    if (str !== "") {
      alert(str);
    }
  };
  return (
    <>
      <Box
        width="100%"
        alignContent="center"
        justifyContent="center"
        display="flex"
        sx={{ padding: "30px" }}
      >
        <CustomizedInputBase searchHandler={searchHandler} />
      </Box>
      <Box>
        <ListCocktail data={modifiedCocktail} />
      </Box>
    </>
  );
};

export { Cocktail, SingleCocktail };
