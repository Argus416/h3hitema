import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import User from "../../controllers/users";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Login = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const form = event.target;

			const data = {
				email: form.email.value,
				password: form.password.value,
			};

			const loggedInUser = await User.getUserLogin(data);

			if (Object.keys(loggedInUser.data).length) {
				loggedInUser.data.isLoggedIn = true;
				dispatch(login(loggedInUser.data));
				navigate("/");
			}
		} catch (err) {
			console.log("Unable to login from api");
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Connexion
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoFocus />
						<TextField margin="normal" required fullWidth name="password" label="Mots de passe" type="password" id="password" />
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Connexion
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/signup" variant="body2">
									Je crée un compte
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
