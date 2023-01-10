import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import { Menu as MenuIcon, Adb as AdbIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { routeInterface, routes } from "../models/Routes";

const pages = Object.values(routes);
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
	const navigate = useNavigate();

	const goToPage = (page: undefined | routeInterface = undefined) => {
		if (page) {
			navigate(page.url);
		}
	};

	return (
		<AppBar position="static" sx={{ marginBottom: 3 }}>
			<Container className="navbar">
				<Toolbar disableGutters>
					<Box>
						<Typography
							variant="h6"
							noWrap
							component="button"
							onClick={() => navigate("/")}
							sx={{
								border: "none",
								background: "none",
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontWeight: 700,
								color: "inherit",
								textDecoration: "none",
								cursor: "pointer",
							}}>
							Skyscanner
						</Typography>
					</Box>

					<Box sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}>
						{pages.map((page: any) => {
							if (page.displayInNavBar) {
								return (
									<Button key={page.name} onClick={() => goToPage(page)} sx={{ my: 2, color: "white", display: "block" }}>
										{page.name}
									</Button>
								);
							}
						})}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
