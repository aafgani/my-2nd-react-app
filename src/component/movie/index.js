import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Box from "@mui/material/Box";
import MovieIcon from "@mui/icons-material/Movie";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Cocktail } from "../cocktail";
import CartMovie from "./cartMovie";
import FavoriteMovie from "./favoriteMovie";
import ListMovie from "./listMovie";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Movie = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Stack direction="column" spacing={2}>
          <Box justifyContent="center" display="flex">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab icon={<MovieIcon />} aria-label="movie" />
              <Tab icon={<ShoppingCartIcon />} aria-label="cart" />
              <Tab icon={<FavoriteIcon />} aria-label="favorite" />
              <Tab icon={<PersonPinIcon />} aria-label="person" />
            </Tabs>
          </Box>
          <Box>
            <TabPanel value={value} index={0}>
              <ListMovie />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CartMovie />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FavoriteMovie />
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Movie;
