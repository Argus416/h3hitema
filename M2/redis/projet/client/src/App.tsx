import { useState, useEffect } from 'react';
import './App.css';
import JSelect from './components/JSelect';
import axiosClient from './util/axiosClient';
import { useId } from 'react';

function App() {
	const [communes, setCommunes] = useState([]);
	const [stations, setStations] = useState([]);

	const [selectedCommune, setSelectedCommune] = useState('');
	const [selectedStation, setSelectedStation] = useState('');

	useEffect(() => {
		axiosClient.get('/communes').then(({ data }) => {
			const communes = data.map((commune: any, i: number) => ({
				id: commune,
				value: commune,
			}));

			setCommunes(communes);
		});
	}, []);

	useEffect(() => {
		if (selectedCommune) {
			axiosClient.get(`/commune/${selectedCommune}`).then(({ data }) => {
				console.log({ data, e: `/commune/${selectedCommune}` });

				const stations = data.map((station: any, i: number) => ({
					id: station.identifiant_station,
					value: station.nom_station,
				}));

				setStations(stations);
			});
		}
	}, [selectedCommune]);

	useEffect(() => {
		if (selectedStation && selectedCommune) {
			axiosClient
				.get(`/commune/station/${selectedCommune}/${selectedStation}`)
				.then(({ data }) => {
					console.log({ data, e: `/station/${selectedCommune}/${selectedStation}` });
				});
		}
	}, [selectedStation, selectedCommune]);

	return (
		<div className='flex gap-8 flex-1'>
			{communes?.length !== 0 && (
				<JSelect
					label='Select communes'
					options={communes}
					className={{ wrapper: 'flex-1' }}
					onChange={(e) => setSelectedCommune(e.target.value)}
				/>
			)}

			<JSelect
				label='Select select stations'
				options={stations}
				className={{ wrapper: 'flex-1' }}
				onChange={(e) => setSelectedStation(e.target.value)}
			/>
		</div>
	);
}

export default App;
