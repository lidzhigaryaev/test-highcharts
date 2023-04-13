import { createBrowserRouter } from 'react-router-dom';
import { Chart, Content, Root, Search } from './pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Search />,
			},
			{
				path: '/charts',
				element: <Chart />,
			},
			{
				path: '/content',
				element: <Content />,
			},
		],
	},
]);
