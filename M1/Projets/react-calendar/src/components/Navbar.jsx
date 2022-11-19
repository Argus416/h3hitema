import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

const Navbar = () => (
	<AppBar position="relative">
		<Toolbar>
			<Typography variant="h6" color="inherit" noWrap>
				<Link to="/" className="link-nav">
					<CalendarMonthIcon sx={{ mr: 2 }} />
					<span>React Calendar</span>
				</Link>
			</Typography>

			<Box sx={{ marginLeft: "auto" }}>
				<Link to="/reservations" className="link-nav">
					Mes réservations
				</Link>
			</Box>
		</Toolbar>
	</AppBar>
);

export default Navbar;
