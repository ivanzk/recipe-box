import React from 'react';

import './Detail.css';

import RecipeBox from '../recipe/RecipeBox';
import RecipeHeader from '../recipe/RecipeHeader';
import Ingredients from '../recipe/elements/Ingredients';
import Recipe from '../recipe/elements/Recipe';
import RecipeNavbar from '../recipe/RecipeNavbar';


export default function Detail(props) {
	if (!props.item)
		return null;
	
	return (
		<div className="Detail">
			<RecipeNavbar 
				recipeId={props.item.id} 
				removeRecipe={props.removeRecipe}
				prevRecipe={props.prevRecipe}
				nextRecipe={props.nextRecipe}
				history={props.history}
			/>
			<RecipeBox>
				<RecipeHeader
					title={props.item.title}
					description={props.item.description}
					imageSrc={props.item.imageSrc}
				/>
				<Ingredients ingredients={props.item.ingredients}/>
				<Recipe recipe={props.item.recipe}/>
			</RecipeBox>
		</div>
	);
}