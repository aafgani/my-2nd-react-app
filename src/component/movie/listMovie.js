import { Box, Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import { useGetPopularMoviesQuery } from "../../redux/service/movieApi";
import CustomizedInputBase from "../others/customizedSearch";
import ItemMovie from "./itemMovie";

const ListMovie = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, refetch } =
    useGetPopularMoviesQuery(page);

  const searchHandler = (searchTxt) => {
    if (searchTxt !== "") {
      refetch();
    } else {
      refetch();
    }
  };

  const paginationOnChage = (event, value) => {
    setPage(value);
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
          placeholder="Search movie here..."
        />
      </Box>
      <Container>
        <Box>
          {isLoading && (
            <>
              <Container alignContent="center">
                <h2>loading...</h2>
              </Container>
            </>
          )}
          {data && (
            <>
              <Grid container spacing={2}>
                {data?.results?.map((movie, i) => (
                  // <p key={i}>{movie.title}</p>
                  <ItemMovie key={i} movie={movie} />
                ))}
              </Grid>
            </>
          )}
          {isError && (
            <>
              <p>{error}</p>
            </>
          )}
        </Box>
        <Box alignContent="center" justifyContent="center" display="flex">
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            shape="rounded"
            onChange={paginationOnChage}
          ></Pagination>
        </Box>
      </Container>
    </>
  );
};

export default ListMovie;
