import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FlightSeperator from "../components/ui/FlightSeperator";
import Skyscanner from "../api/Skyscanner";
import { FlightDetails, FlightDetailsLeg } from "../models/Skyscanner";
import Loading from "../components/ui/Loading";
import { getFullYear, getTime } from "../utils/Helper";
import { Favorite as FavoriteIcon } from "@mui/icons-material";

interface FavoriteCardProps {
	flightLeg: FlightDetailsLeg;
	idLocalStorage?: string;
	reloadPage: Function;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ flightLeg, idLocalStorage, reloadPage }) => {
	const goToOffre = () => {
		console.log(flightLeg);
		const date = getFullYear(flightLeg.arrival);
		const urlParams = `http://localhost:5173/flights/details?params=[{"id":"${flightLeg.id}","origin":"${flightLeg.origin.displayCode}","destination":"${flightLeg.destination.displayCode}","date":"${date}"}]`;
		window.open(urlParams, "_blank");
	};

	const removeFromFavorite = () => {
		Skyscanner.removeFromFavorite(idLocalStorage);
		reloadPage(idLocalStorage);
	};

	return (
		<Box
			sx={{
				boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				borderRadius: "8px",
				padding: "12px",
				maxWidth: "300px",
				marginBottom: "15px",
			}}>
			<Box>
				<Typography>{flightLeg.origin.name}</Typography>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<FlightSeperator />
				</Box>
				<Typography sx={{ textAlign: "end" }}>{flightLeg.destination.name}</Typography>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography fontWeight="bold" marginTop="30px">
					{getTime(flightLeg.departure)}
				</Typography>
				<Typography fontWeight="bold" marginTop="30px">
					{getTime(flightLeg.arrival)}
				</Typography>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
				<Button variant="contained" onClick={goToOffre}>
					Voir l'offre
				</Button>
				<Button onClick={removeFromFavorite}>
					<FavoriteIcon sx={{ fill: "red !important" }} />
				</Button>
			</Box>
		</Box>
	);
};

const Favorite: React.FC = () => {
	const [loader, setLoader] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const favoritesIdsFromLocalStorage = Skyscanner.getFavoris();
	const [reload, setReload] = useState(false);
	const [elementIdToRemove, setElementIdToRemove] = useState("");

	const loadFavorites = async () => {
		const allFavorites = [];
		for await (let id of favoritesIdsFromLocalStorage) {
			const searchFlights = await Skyscanner.getFlightDetails(id);
			if (typeof searchFlights !== "boolean") {
				searchFlights.url = id;
				allFavorites.push(searchFlights);
			}
		}
		return allFavorites;
	};

	const reloadPage = (url: string) => {
		setElementIdToRemove(url);
		setReload(!reload);
	};

	useEffect(() => {
		// first timeLoad
		if (!favorites.length) {
			loadFavorites().then((x: any) => {
				setFavorites(x);
				setLoader(true);
			});
		} else {
			// remove favorite directly from the list
			const filterdList = favorites.filter((x: FlightDetails) => x.legs[0].id !== elementIdToRemove);
			setFavorites(filterdList);
			console.log("reloaded", { filterdList, favorites });
		}
	}, [reload]);

	return (
		<Container>
			<Typography variant="h4">Favoris </Typography>
			<Box sx={{ paddingTop: "15px" }}>
				{favorites.length > 0 &&
					favorites.map((favorite: FlightDetails, index: number) => (
						<FavoriteCard key={index} idLocalStorage={favorite.url} flightLeg={favorite.legs[0]} reloadPage={reloadPage} />
					))}
				{favorites.length === 0 && !loader && <Loading />}
				{favorites.length === 0 && loader && (
					<Box>
						<Typography variant="h5" sx={{ marginTop: "15px" }}>
							Votre favori est vide
						</Typography>
					</Box>
				)}
			</Box>
		</Container>
	);
};

export default Favorite;
