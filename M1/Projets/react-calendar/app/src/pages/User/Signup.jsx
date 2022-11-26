import * as React from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Face6Icon from "@mui/icons-material/Face6";
import User from "../../controllers/users";

const theme = createTheme();

const Signup = () => {
	const navigate = useNavigate();
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const form = event.target;
			const data = {
				first_name: form.first_name?.value,
				last_name: form.last_name?.value,
				email: form.email?.value,
				password: form.password?.value,
			};
			const newUser = await User.createUser(data);
			navigate("/login");
		} catch (err) {
			console.log("Unable to do ajax call");
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
						<Face6Icon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Création
					</Typography>

					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<TextField margin="normal" fullWidth id="first_name" label="Votre prénom" name="first_name" autoFocus />
							</Grid>
							<Grid item xs={6}>
								<TextField margin="normal" fullWidth name="last_name" label="Votre nom" id="last_name" />
							</Grid>
						</Grid>
						<TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoFocus />
						<TextField margin="normal" required fullWidth name="password" label="Mots de passe" type="password" id="password" />

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
