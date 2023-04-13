import React, {
	ButtonHTMLAttributes,
	FC,
	MouseEventHandler,
	ReactNode,
} from 'react';

interface ButtonProps {
	type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	disabled: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({
	type = 'button',
	onClick,
	disabled,
	children,
}) => (
	<button
		type={type}
		onClick={onClick}
		disabled={disabled}
		className={`btn ${disabled ? 'btn-disabled' : 'btn-primary'}`}
	>
		{children}
	</button>
);

export default Button;
