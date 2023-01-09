import { Container, Typography } from "@mui/material";

const Error404: React.FC = () => {
	return (
		<Container>
			<Typography variant="h4" color="red">
				Erreur 404, page non trouvé
			</Typography>
		</Container>
	);
};

export default Error404;
