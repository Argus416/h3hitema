import { RickAndMortyCharacter, RickAndMortyCharacterResult } from "../models/RickAndMorty";

const Card = (props: any) => {
	const charechter = props.charechter as RickAndMortyCharacterResult;
	return (
		<div className="my-card">
			<div className="left">
				<img src={charechter.image} alt={charechter.name} />
			</div>
			<div className="right">
				<div className="title">
					<a href="" className="my-card-title">
						{charechter.name}
					</a>
					<div className="status">
						<span className={`status-cirlce status-${charechter.status.toLocaleLowerCase()}`}></span>
						<span>
							{charechter.species} - {charechter.status}
						</span>
					</div>
				</div>

				<div className="last-known-location">
					<span className="my-secondary-titie ">Last known location:</span>
					<a href={charechter.location.url}>{charechter.location.name}</a>
				</div>

				<div className="first-seen-in">
					<span className="my-secondary-titie">First seen in:</span>
					<a href={charechter.origin.url}>{charechter.origin.name}</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
