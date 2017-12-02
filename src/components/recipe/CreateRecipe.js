import React from 'react';

import EditRecipe from './EditRecipe';


export default function CreateRecipe(props) {
	return (
		<EditRecipe 
			updateRecipes={props.updateRecipes} 
			history={props.history} 
		/>
	);
}