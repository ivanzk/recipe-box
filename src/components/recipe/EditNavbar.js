import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import Cancel from 'material-ui/svg-icons/content/clear';


export default function RecipeNavbar(props) {
	return (
		<div className="EditNavbar">
			<RaisedButton
				className="RaisedButton"
				label="done" 
				icon={<Done />}
				onClick={props.handleSubmit}
			/>
			
			<RaisedButton 
				className="RaisedButton"
				label="cancel"
				icon={<Cancel />}
				onClick={() => {
					if (props.recipeId !== undefined)
						props.history.push('/recipes/' + props.recipeId);
					else
						props.history.push('/');
				}}
			/>
		</div>
	);
}