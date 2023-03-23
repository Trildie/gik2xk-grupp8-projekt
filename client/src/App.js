import './App.css';
import { Box, AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from "@mui/icons-material/House";

import { Routes, Route, Link } from 'react-router-dom';



import Home from './views/Home';
import CartMain from './views/CartMain';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import Users from './views/Users';
import UsersEdit from './views/UsersEdit';
import ReviewEdit from './views/ReviewEdit';

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
              <Link  to="/">
                <HouseIcon />
              </Link>
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <SportsEsportsIcon />
              <Link to="/products" >Games</Link>
              <SportsEsportsIcon />
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              <Link to="/users/1" color="primary">User</Link>
              <PersonIcon/>
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
          <Route exact path="/" element={<Home></Home>}> </Route>
          <Route exact path="/cart" element={<CartMain></CartMain>}></Route>
          <Route exact path="/products" element={<Products></Products>}></Route>
          <Route exact path="/Users/:id" element={<Users></Users>}> </Route>
          <Route exact path="/productDetail/:id" element={<ProductDetail/>} ></Route>
          <Route exact path="/productDetail/new" element={<ProductDetail/>} ></Route>
          <Route exact path="/productDetail/:id/edit" element={<ProductEdit/>} ></Route>
          <Route exact path="/productEdit/:id" element={<ProductEdit />} ></Route>
          <Route exact path="/UsersEdit/:id" element={<UsersEdit />} ></Route>
          <Route exact path="/ReviewEdit/:id" element={<ReviewEdit/>} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
