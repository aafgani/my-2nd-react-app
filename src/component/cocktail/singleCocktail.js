import React, { useState, useEffect } from "react";
import { Link, useParms } from "react-router-dom";
import { fetchSingleCocktail } from "../../redux/features/cocktailSlice";
import {useSelector, useDispatch} from "react-redux"

const SingleCocktail = () => {
  return (
    <>
      <p>single cocktail</p>
    </>
  );
};

export default SingleCocktail;
