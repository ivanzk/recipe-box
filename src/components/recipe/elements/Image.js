import React from 'react';


export default function Image(props) {
	return (
		<div className="Image">
			<img src={props.imageSrc} alt={props.description} />
		</div>
	);
}