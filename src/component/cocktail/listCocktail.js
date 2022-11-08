import React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  CardMedia,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const ListCocktail = ({ data }) => {
  return (
    <>
      <Grid container spacing={2}>
        {data?.map((item, index) => {
          const { id, name, img, glass } = item;
          return (
            <>
              <Grid key={index} item sm={6} md={4} lg={3}>
                <Container>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {glass}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Link to={`/cocktail/${id}`}>
                        <Button size="small">Details</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Container>
              </Grid>
            </>
          );
        })}
        {/*  */}
      </Grid>
    </>
  );
};

export default ListCocktail;
