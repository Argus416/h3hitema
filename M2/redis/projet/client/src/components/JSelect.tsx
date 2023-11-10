type JSelectProps = {
	label: string;
	options: { id: string; value: string }[];
	className?: { wrapper?: string; label?: string; select?: string };
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	selectedValue?: string;
};

const JSelect = ({ label, options, className, selectedValue, onChange }: JSelectProps) => {
	return (
		<div className={className?.wrapper}>
			<label
				htmlFor='countries'
				className={`block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white ${className?.label}`}
			>
				{label}
			</label>
			<select
				id='countries'
				className={`${className?.select} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
				onChange={onChange}
			>
				{options.map((option) => (
					<option
						key={option.id}
						value={option.id}
						defaultValue={option.id === selectedValue}
					>
						{option.value}
					</option>
				))}
			</select>
		</div>
	);
};

export default JSelect;
