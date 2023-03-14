import './App.css';
import { Box, AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HouseIcon from "@mui/icons-material/House";

import { Routes, Route, Link } from 'react-router-dom';



import Home from './views/Home';
import Cart from './views/Cart';
import Product from './views/Product';
import ProductDetail from './views/ProductDetail';



function App() {
  return (
    <div className="App">
      <h1>Eshop </h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <HouseIcon />
              </Link>
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <SportsEsportsIcon />
              <Link to="/product">Games</Link>
              <SportsEsportsIcon />
            </Typography>

            <Button color="inherit">
              <Link to="/cart">
                <LocalGroceryStoreIcon />
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route
            path="/productDetail"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
