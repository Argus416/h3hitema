import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const currentUser = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHanlder = () => {
		dispatch(logout());
		navigate("/login");
	};

	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					<Link to="/" className="link-nav">
						<CalendarMonthIcon sx={{ mr: 2 }} />
						<span>React Calendar</span>
					</Link>
				</Typography>

				<Box sx={{ marginLeft: "auto", display: "flex", gap: 3 }}>
					{!currentUser.isLoggedIn ? (
						<>
							<Link to="/login" className="link-nav">
								Connexion
							</Link>

							<Link to="/signup" className="link-nav">
								Créer un compte
							</Link>
						</>
					) : (
						<>
							<Link to="/reservations" className="link-nav">
								Mes réservations
							</Link>
							<Button onClick={logoutHanlder} className="link-nav" variant="contained" color="error">
								Déconnexion
							</Button>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};


export default Navbar;
