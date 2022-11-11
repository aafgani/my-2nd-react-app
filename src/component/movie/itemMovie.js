import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Stack,
  Rating,
  Box,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

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
            <Container>
              <Stack direction="column" alignContent="center">
                <Typography variant="h7">{title}</Typography>
                <Rating
                  size="small"
                  readOnly
                  defaultValue={4}
                  precision={0.5}
                />
                <Stack direction="row" spacing={1}>
                  <br /> <br />
                  <IconButton aria-label="add to cart">
                    <ShoppingCartIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorite">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorite">
                    <PlayCircleIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Container>
          </CardContent>
          <CardActions></CardActions>
        </Container>
      </Grid>
    </>
  );
};
export default ItemMovie;
