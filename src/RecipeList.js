import React from 'react';
import { Grid } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, onRecipeSelect }) => {
	const listitems = recipes.map(rec => {
		return <RecipeListItem onRecipeSelect={onRecipeSelect} recipe={rec} key={rec.id} />;
	});

	return (
		<Grid stackable columns={3}>
			{listitems}
		</Grid>
	);
};

export default RecipeList;
