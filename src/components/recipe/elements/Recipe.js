import React from 'react';

import Marked from '../../Marked';


export default function Recipe(props) {
	return (
		<div className="Recipe">
			<hr/>
			<h4>Recipe</h4>
			<hr/>
			<div>
				<Marked text={props.recipe} />
			</div>
		</div>
	);
}