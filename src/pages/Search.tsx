import React, { useState } from 'react';
import { Button, Input, Spinner } from '../components';
import { Link } from 'react-router-dom';
import { githubApiUrl } from '../api';

const Search = () => {
	const [username, setUsername] = useState<string>('');
	const [repos, setRepos] = useState<Record<string, any>[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsError(false);
		setUsername(e.target.value);
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const response = await fetch(`${githubApiUrl}/users/${username}/repos`);

			if (!response.ok) {
				setIsError(true);
				return;
			}

			const result = await response.json();
			setRepos(result);
		} catch (error) {
			console.error('error :>> ', error);
		} finally {
			setIsLoading(false);
		}
	};

	const renderRepos = () => {
		if (isLoading) {
			return <p className="text-info">Загрузка...</p>;
		}

		if (isError) {
			return (
				<p className="text-warning">
					Вероятно, пользователя с таким юзернеймом не существует.
				</p>
			);
		}

		if (repos.length) {
			return (
				<ul>
					{repos.map((repo) => (
						<li key={repo.id} className="text-3xl font-bold hover:underline">
							<Link
								to={`/charts?username=${repo.owner.login}&repoName=${repo.name}`}
							>
								{repo.name}
							</Link>
						</li>
					))}
				</ul>
			);
		}

		return null;
	};

	return (
		<div className="flex flex-col items-center w-full">
			<form className="flex gap-3 w-full">
				<Input type="text" value={username} onChange={handleUsernameChange} />
				<Button
					type="submit"
					onClick={handleSubmit}
					disabled={!username.length || isLoading}
				>
					{isLoading && <Spinner />}
					Найти
				</Button>
			</form>
			<div className="self-start mt-3">{renderRepos()}</div>
		</div>
	);
};

export default Search;
