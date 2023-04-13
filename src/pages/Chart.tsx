import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { githubApiUrl } from '../api';

const chartDefaultOptions = {
	xAxis: {
		categories: [
			'forks',
			'network_count',
			'open_issues',
			'subscribers_count',
			'watchers',
		],
	},
	plotOptions: {
		series: {
			dataLabels: {
				enabled: true,
			},
		},
	},
};

const Chart = () => {
	const [params] = useSearchParams();
	const isParamExist = Boolean(params.has('username'));
	const username = isParamExist ? params.get('username') : 'google';
	const repoName = isParamExist ? params.get('repoName') : 'acai';

	const [options, setOptions] = useState<Highcharts.Options>({});

	useEffect(() => {
		const getRepo = async () => {
			const response = await fetch(
				`${githubApiUrl}/repos/${username}/${repoName}`
			);
			const result = await response.json();
			setOptions({
				title: { text: `График репозитория ${result.name}` },
				series: [
					{
						type: 'column',
						data: [
							result.forks ?? 0,
							result.open_issues ?? 0,
							result.network_count ?? 0,
							result.subscribers_count ?? 0,
							result.watchers ?? 0,
						],
					},
				],
			});
		};

		try {
			getRepo();
		} catch (error) {
			console.error('error :>> ', error);
		}
	}, [params]);

	return (
		<>
			{!isParamExist && (
				<p className="my-3">
					Это график репозитория "acai" юзера "google". Чтобы самому выбрать
					репозиторий, вернитесь на{' '}
					<Link to="/" className="link">
						главную
					</Link>
					.
				</p>
			)}
			<HighchartsReact
				highcharts={Highcharts}
				options={{
					...chartDefaultOptions,
					...options,
				}}
				constructorType="chart"
			/>
		</>
	);
};

export default Chart;
