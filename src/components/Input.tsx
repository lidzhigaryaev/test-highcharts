import React, { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';

interface InputProps {
	type: HTMLInputTypeAttribute;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, onChange }) => (
	<input
		type={type}
		className="input input-bordered w-full"
		placeholder="Гитхаб юзернейм"
		onChange={onChange}
	/>
);

export default Input;
