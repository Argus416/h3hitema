import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Face6Icon from "@mui/icons-material/Face6";
import User from "../../controllers/users";
import { useRef } from "react";

const theme = createTheme();

const Signup = () => {
	const signupForm = useRef(null);
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(signupForm.current);
		// const data = Object.fromEntries()
		console.log(formData.values(), "data");
		console.log(signupForm.current);
		// const newUser = await User.createUser()
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
					{process.env.REACT_APP_API_URL}
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<Face6Icon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Création
					</Typography>

					<Box ref={signupForm} component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoFocus />
						<TextField margin="normal" required fullWidth name="password" label="Mots de passe" type="password" id="password" />
						<TextField
							margin="normal"
							required
							fullWidth
							name="password_confirmation"
							label="Je confirme mon mot de passe"
							type="password"
							id="password_confirmation"
						/>
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Créer un nouveau compte
						</Button>

						<Grid container>
							<Grid item>
								<Link to="/login" variant="body2">
									Je me connect
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Signup;
