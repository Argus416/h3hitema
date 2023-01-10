import { Box } from "@mui/system";
import { Flight as FlightIcon } from "@mui/icons-material";

const FlightSeperator: React.FC = () => {
	return (
		<Box className="flightSeperator">
			<span className="line"></span>
			<FlightIcon className="flightIcon" />
		</Box>
	);
};

export default FlightSeperator;
