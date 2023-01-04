import { useState, useEffect } from "react";
import { RickAndMortyCharacter, RickAndMortyCharacterResult } from "../models/RickAndMorty";
import rickAndMorty from "../controllers/RickAndMorty";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Home = () => {
	const [charechters, setCharechters] = useState({} as RickAndMortyCharacter);
	const [currentPage, setCurrentPage] = useState("1");

	useEffect(() => {
		console.log("rerender");
		rickAndMorty.getCharechter(currentPage).then((charechters) => {
			console.log("here");
			setCharechters(charechters as RickAndMortyCharacter);
		});
	}, [currentPage]);

	const setCurrentPageProp = (value: string) => {
		setCurrentPage(value.toString());
		console.log(value);
	};
	return (
		<div className="home">
			<div className="title-container text-center">
				<h1 className="home-title">The Rick and Morty API</h1>
			</div>
			<div className="charechters-container mt-5">
				{charechters?.results?.length && charechters.results.map((charechter) => <Card charechter={charechter} key={charechter.id} />)}
			</div>

			{charechters?.results?.length && <Pagination nbPages={charechters.info.pages} setCurrentPage={(value: any) => setCurrentPageProp(value)} />}
		</div>
	);
};

export default Home;
