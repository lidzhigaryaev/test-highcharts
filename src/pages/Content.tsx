import React from 'react';

const Content = () => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://random.dog/391a1745-b888-41d1-9dce-80c0a62e7e95.JPG"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
