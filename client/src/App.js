import './App.css';
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	BottomNavigationAction,
	BottomNavigation,
} from '@mui/material';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';


import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Routes, Route, Link } from 'react-router-dom';


import CartMain from './views/CartMain';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import Users from './views/Users';
import UsersEdit from './views/UsersEdit';
import ReviewEdit from './views/ReviewEdit';
import React from 'react';

function App() {
	return (
		<div className="App">
			<h1>Eshop</h1>

			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed">
					<Toolbar>
				<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 0 }}
						>
							<SportsEsportsIcon />
							<Link to="/products">Games</Link>
							<SportsEsportsIcon />
						</Typography>

					

						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							<Link
								to="/users/1"
								color="primary"
							>
								User
							</Link>
							<PersonIcon />
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
			<Route
						exact
						path="/products"
						element={<Products></Products>}
					></Route>
					<Route
						exact
						path="/cart"
						element={<CartMain></CartMain>}
					></Route>
					
					<Route
						exact
						path="/Users/:id"
						element={<Users></Users>}
					>
						{' '}
					</Route>
					<Route
						exact
						path="/productDetail/:id"
						element={<ProductDetail />}
					></Route>
					<Route
						exact
						path="/productDetail/new"
						element={<ProductDetail />}
					></Route>
					<Route
						exact
						path="/productDetail/:id/edit"
						element={<ProductEdit />}
					></Route>
					<Route
						exact
						path="/productEdit/:id"
						element={<ProductEdit />}
					></Route>
					<Route
						exact
						path="/UsersEdit/:id"
						element={<UsersEdit />}
					></Route>
					<Route
						exact
						path="/ReviewEdit/:id"
						element={<ReviewEdit />}
					></Route>
				</Routes>
			</div>

			<Box>
				<BottomNavigation
					className="Box"
					value="#"
					style={{ background: '#263238' }}
				> <Typography sx={{ color: '#ffd600', PaddingTop:'2rem' }}>Contact us
					<a href="mailto:h20ronjs@du.se" > 
						<BottomNavigationAction
              sx={{ color: '#ffd600' }}
            icon={<ContactMailIcon sx={{ color: '#ffd600' }} />}
						/>
            </a>
            </Typography>
				</BottomNavigation>
			</Box>
		</div>
	);
}

export default App;
