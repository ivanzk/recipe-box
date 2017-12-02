import React from 'react';


export default function Headline(props) {
	return (
		<div className="Headline">
			<div>
				<h1 className="text-capitalize">{props.title}</h1>
				<h4 className="text-secondary">{props.description}</h4>
			</div>
		</div>
	);
}