import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className="container mx-auto">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
