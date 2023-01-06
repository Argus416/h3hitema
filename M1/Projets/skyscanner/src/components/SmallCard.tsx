import { City } from "../models/Public";
import { Box, Link, Typography } from "@mui/material";
import { lightPurple } from "../theme/Colors";

interface SmallCardProps {
	city: City;
}

const SmallCard: React.FC<SmallCardProps> = ({ city }) => {
	return (
		<Box
			className="smallCard"
			style={{
				display: "flex",
				backgroundColor: lightPurple,
				gap: "20px",
				borderRadius: "8px",
			}}
		>
			<img src={city.url} alt={city.name} width="100" height="100" />
			<Box>
				<Typography variant="h5" fontWeight="500" marginTop="10px">
					{city.name}
				</Typography>

				<Link underline="hover">Vols</Link>
			</Box>
		</Box>
	);
};

export default SmallCard;
