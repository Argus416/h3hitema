import React, { useEffect, useState, useRef, ChangeEvent, FormEvent } from 'react';
import './App.css';
import JSelect from './components/JSelect';
import { transformString } from './util/String';
import axiosClient from './util/axiosClient';
import { loadedDetailsFromater } from './util/formatter';

interface Commune {
	id: string;
	value: string;
}

interface Station {
	id: string;
	value: string;
}

interface FormDataEntry {
	[key: string]: string;
}

interface FormattedResult {
	[key: string]: {
		type: string;
		originalText: string;
		text: string;
	};
}

const App: React.FC = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [updateMode, setUpdateMode] = useState<boolean>(false);
	const [communes, setCommunes] = useState<Commune[]>([]);
	const [stations, setStations] = useState<Station[]>([]);
	const [selectedCommune, setSelectedCommune] = useState<string>('');
	const [selectedStation, setSelectedStation] = useState<string>('');
	const [result, setResult] = useState<FormattedResult>({});
	const [refresh, setRefresh] = useState<boolean>(false);

	const fetchData = async (url: string, setDataCallback: (data: any) => void) => {
		try {
			const { data } = await axiosClient.get(url);
			setDataCallback(data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		setUpdateMode(false);
		fetchData('/communes', (data: string[]) => {
			const communes = data.map((commune) => ({
				id: commune,
				value: commune,
			}));
			setCommunes(communes);
			setSelectedCommune(communes[0]?.id);
		});
	}, []);

	useEffect(() => {
		setUpdateMode(false);
		setResult({});
		if (selectedCommune) {
			fetchData(`/commune/${selectedCommune}`, (data: any[]) => {
				const stations = data.map((station) => ({
					id: station.identifiant_station,
					value: station.nom_station,
				}));
				setStations(stations);
				if (stations.length) setSelectedStation(stations[0]?.id);
			});
		}
	}, [selectedCommune, refresh]);

	useEffect(() => {
		setUpdateMode(false);
		if (selectedStation && selectedCommune) {
			fetchData(
				`/commune/station/${selectedCommune}/${selectedStation}`,
				(data: any) => {
					setResult(loadedDetailsFromater(data));
				}
			);
		}
	}, [selectedStation, selectedCommune, refresh]);

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		const checkboxes = {
			borne_de_paiement_disponible: 'NON',
			retour_velib_possible: 'NON',
			station_en_fonctionnement: 'NON',
		};
		const formData = new FormData(formRef.current!);
		const data: FormDataEntry = {
			...checkboxes,
			...Object.fromEntries(formData.entries()),
		};

		await axiosClient.patch(
			`/commune/station/${selectedCommune}/${selectedStation}`,
			data
		);
	};

	const deleteStation = () => {
		const confirmation = window.confirm('Are you sure you want to delete this station ?');

		if (confirmation) {
			axiosClient.delete(`/commune/station/${selectedCommune}/${selectedStation}`);
		}

		setResult({});
		setSelectedStation('');
		setRefresh(!refresh);
	};

	const renderFormFields = () => {
		return Object.entries(result)?.map(([key, entry], index) => (
			<div
				key={index}
				className='flex items-center justify-between mb-4'
			>
				<label className='font-bold'>{transformString(key)} : </label>
				{updateMode ? (
					<input
						name={key}
						disabled={key === 'identifiant_station'}
						className={`block border border-gray-300 rounded-md p-1 disabled:bg-gray-300 ${
							entry.type !== 'checkbox' ? 'w-350' : 'h-5 w-5'
						}`}
						type={entry.type}
						defaultValue={
							entry.type === 'date'
								? new Date(entry.originalText).toISOString().split('T')[0]
								: entry.originalText
						}
						defaultChecked={entry.originalText === 'OUI' ? true : false}
					/>
				) : (
					<span
						className='cursor-pointer'
						onDoubleClick={() => setUpdateMode(!updateMode)}
					>
						{entry.text}
					</span>
				)}
			</div>
		));
	};

	return (
		<>
			<div className='flex gap-8 flex-1'>
				{communes?.length !== 0 && (
					<JSelect
						label='Select communes'
						options={communes}
						className={{ wrapper: 'flex-1' }}
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setSelectedCommune(e.target.value)
						}
					/>
				)}

				<JSelect
					label='Select select stations'
					options={stations}
					className={{ wrapper: 'flex-1' }}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						setSelectedStation(e.target.value)
					}
				/>
			</div>

			{Object.keys(result).length > 0 && (
				<div className='mx-auto w-[900px] p-6 bg-white border border-gray-200 rounded-lg shadow mt-12'>
					<div className='card-header relative flex items-center justify-center mb-8'>
						<h5 className='text-2xl font-bold tracking-tight text-gray-900'>
							{result?.nom_station.text}
						</h5>
						<button
							type='button'
							className='absolute end-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 '
							onClick={deleteStation}
						>
							Delete
						</button>
					</div>
					<form
						onSubmit={submitHandler}
						className='font-normal text-gray-700'
						ref={formRef}
					>
						{renderFormFields()}
						{updateMode && (
							<button
								type='submit'
								className='mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'
							>
								Mettre à jour
							</button>
						)}
					</form>
				</div>
			)}
		</>
	);
};

export default App;
