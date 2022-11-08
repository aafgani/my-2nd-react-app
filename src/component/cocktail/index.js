import Box from "@mui/material/Box";
import CustomizedInputBase from "../others/customizedSearch";
import React, { useState, useEffect } from "react";
import SingleCocktail from "./singleCocktail";
import ListCocktail from "./listCocktail";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import {
  fetchCocktails,
  fetchSearchCocktail,
} from "../../redux/features/cocktailSlice";
import { Container } from "@mui/material";

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

  const searchHandler = (searchTxt) => {
    if (searchTxt !== "") {
      dispatch(fetchSearchCocktail({ searchTxt }));
    } else {
      dispatch(fetchCocktails());
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
        <CustomizedInputBase
          searchHandler={searchHandler}
          placeholder="Search..."
        />
      </Box>
      <Container maxWidth="xl">
        <Box>
          {loading ? (
            <>
              <Container alignContent="center">
                <h2>loading...</h2>
              </Container>
            </>
          ) : (
            <>
              {cocktails && <ListCocktail data={modifiedCocktail} />}
              {!cocktails && (
                <Container justifyContent="center">
                  <h2>No Cocktails matched your search criteria</h2>
                </Container>
              )}
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export { Cocktail, SingleCocktail };
