import React from 'react';

import Marked from '../../Marked';


export default function Ingredients(props) {
	if (!props.ingredients)
		return null;
	
	return (
		<div className="Ingredients">
			<hr/>
			<h4>Ingredients</h4>
			<hr/>
			<div>
				<Marked text={props.ingredients} />
			</div>
		</div>
	);
}