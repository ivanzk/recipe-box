import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavRight from 'material-ui/svg-icons/navigation/chevron-right';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';


export default function RecipeNavbar(props) {
	return (
		<div className="RecipeNavbar d-flex">
			<IconButton
				disabled={props.recipeId === props.prevRecipe ? true : false}
				onClick={() => props.history.push('/recipes/' + props.prevRecipe)}>
				<NavLeft />
			</IconButton>
			
			<div className="d-flex mx-auto">
				<IconButton 
					className="align-self-center" 
					label="edit" 
					onClick={() => {props.history.push('/edit/' + props.recipeId)}}
					tooltip="Edit Recipe" tooltipPosition="top-center">
					<Edit />
				</IconButton>
				<IconButton 
					className="align-self-center" 
					label="delete"
					onClick={() => {
						props.removeRecipe(props.recipeId);
						props.history.replace('/');
					}}
					tooltip="Delete Recipe" tooltipPosition="top-center">
					<Delete />
				</IconButton>
			</div>
			
			<IconButton 
				className="mr-0"
				disabled={props.recipeId === props.nextRecipe ? true : false}
				onClick={() => props.history.push('/recipes/' + props.nextRecipe)}>
				<NavRight />
			</IconButton>
		</div>
	);
}