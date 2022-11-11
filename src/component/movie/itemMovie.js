import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const ItemMovie = ({ movie }) => {
  const { id, title, poster_path, backdrop_path } = movie;
  return (
    <>
      <Grid item sm={6} md={4} lg={3}>
        <Container>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="300"
              image={"https://image.tmdb.org/t/p/w342" + poster_path}
              alt="green iguana"
            />
          </Card>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
          <CardActions></CardActions>
        </Container>
      </Grid>
    </>
  );
};
export default ItemMovie;
