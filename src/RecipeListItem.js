import React from 'react';
import { Item, Grid, Image } from 'semantic-ui-react';

const RecipeListItem = ({ recipe, onRecipeSelect }) => {
	return (
		<Grid.Column>
			<Item onClick={() => onRecipeSelect(recipe)}>
				<Image src={recipe.thumbnail} />
				<h5>{recipe.title}</h5>
			</Item>
		</Grid.Column>
	);
};

export default RecipeListItem;
