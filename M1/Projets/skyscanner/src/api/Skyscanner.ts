import { Airport, Flight, FlightDetails, GetFlightDetailsParams, GetFlightsParams, localStorageKeys } from "../models/Skyscanner";
import axios from "../utils/Axiso";

class Skyscanner {
	async searchAirports(city: string): Promise<Airport[] | boolean> {
		try {
			const request = await axios.get("/searchAirport", { params: { query: city } });
			const data = request.data.data as Airport[];
			return data;
		} catch (err) {
			console.error(`Error fetching airports`, err);
			return false;
		}
	}

	async searchFlights({ ...params }: GetFlightsParams): Promise<Flight[] | boolean | string> {
		try {
			const request = await axios.get("/searchFlights", { params: { ...params, currency: "EUR" } });
			if (request.data.status) {
				const data = request.data.data as Flight[];
				return data;
			}

			if (!request.data.status) {
				return request.data.message;
			}

			return false;
		} catch (err) {
			console.error(`Error fetching flights`, err);
			return false;
		}
	}

	async getFlightDetails(params: string): Promise<FlightDetails | boolean> {
		try {
			params = params + "&currency=EUR";
			const request = await axios.get("/getFlightDetails?" + params);
			const data = request.data.data as FlightDetails;
			return data;
		} catch (err) {
			console.error(`Error fetching flight`, err);
			return false;
		}
	}
}

class SkyscannerWithLocalStorageMethods extends Skyscanner {
	getFavoris() {
		const favoris = JSON.parse(localStorage.getItem(localStorageKeys.airports) || "[]");

		return favoris;
	}

	setFavoris(data: any) {
		const currentData = this.getFavoris();
		const isIncluded = currentData.includes(data);
		if (isIncluded) return;
		const favoris = localStorage.setItem(localStorageKeys.airports, JSON.stringify([data, ...currentData]));
		return favoris;
	}

	
	removeFromFavorite(data: any) {
		const currentData = this.getFavoris();
		const removeFavorite =currentData.filter((x:string) => data === x)
		localStorage.setItem(localStorageKeys.airports, JSON.stringify(removeFavorite));
		// const removeFavorite = 
	}

	
}

const skyscanner = new SkyscannerWithLocalStorageMethods();

export default skyscanner;
