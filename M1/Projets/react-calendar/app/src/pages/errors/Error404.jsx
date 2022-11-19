import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const Error404 = () => {
	return (
		<Container sx={{ marginTop: 3 }}>
			<Typography variant="h4" color="initial">
				Error 404, page non trouvée
			</Typography>
		</Container>
	);
};

export default Error404;
