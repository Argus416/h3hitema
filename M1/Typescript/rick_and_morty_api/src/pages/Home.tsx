import { useState, useEffect } from "react";
import { RickAndMortyCharacter, RickAndMortyCharacterResult } from "../models/RickAndMorty";
import rickAndMorty from "../controllers/RickAndMorty";
import Card from "../components/Card";

const Home = () => {
	const [charechters, setCharechters] = useState({} as RickAndMortyCharacter);
	useEffect(() => {
		rickAndMorty.getCharechter().then((charechters) => {
			console.log(typeof charechters);
			setCharechters(charechters as RickAndMortyCharacter);
		});
	}, []);

	console.log(charechters, "charechters");
	return (
		<div className="home">
			<div className="title-container text-center">
				<h1 className="home-title">The Rick and Morty API</h1>
			</div>
			<div className="charechters-container mt-5">
				{charechters?.results?.length && charechters.results.map((charechter) => <Card charechter={charechter} key={charechter.id} />)}
			</div>
		</div>
	);
};

export default Home;
