import React from "react";

import AppBar from "@mui/material/AppBar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => (
	<AppBar position="relative">
		<Toolbar>
			<CalendarMonthIcon sx={{ mr: 2 }} />
			<Typography variant="h6" color="inherit" noWrap>
				React Calendar
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Navbar;
