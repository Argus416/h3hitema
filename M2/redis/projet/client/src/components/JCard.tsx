import { transformString } from '../util/String';

type JCardProps = {
	result: any;
	addMode?: boolean;
	updateMode: boolean;
	setUpdateMode: () => void;
};

const JCard = ({ result, addMode, updateMode, setUpdateMode }: JCardProps) => {
	return Object.entries(result)?.map(([key, entry]: any, index) => (
		<div
			key={index}
			className='flex items-center justify-between mb-4'
		>
			<label className='font-bold'>{transformString(key)} : </label>
			{updateMode || addMode ? (
				<input
					name={key}
					disabled={key === 'identifiant_station'}
					className={`block border border-gray-300 rounded-md p-1 disabled:bg-gray-300 ${
						entry.type !== 'checkbox' ? 'w-350' : 'h-5 w-5'
					}`}
					type={entry.type}
					defaultValue={
						entry.type === 'date' && entry?.originalText?.length
							? new Date(entry?.originalText ?? '').toISOString().split('T')[0]
							: entry?.originalText
					}
					defaultChecked={entry?.originalText === 'OUI' ? true : false}
				/>
			) : (
				<span
					className='cursor-pointer'
					onDoubleClick={setUpdateMode}
				>
					{entry.text}
				</span>
			)}
		</div>
	));
};

export default JCard;
