import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
	const currentUser = useSelector((state) => state.user);
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
						<Link to="/reservations" className="link-nav">
							Mes réservations
						</Link>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};


export default Navbar;
