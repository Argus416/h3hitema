import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Loading: React.FC = () => {
	return (
		<Box>
			<Typography variant="h5" sx={{ marginTop: "15px" }}>
				Loading...
			</Typography>
		</Box>
	);
};

export default Loading;
