import React from 'react';
import { Grid, Dimmer, Loader, Header } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, onRecipeSelect }) => {
	if (recipes.length === 0) {
		return (
			<Dimmer active inverted>
				<Loader inverted>Loading</Loader>
			</Dimmer>
		);
	}
	const listitems = recipes.map(rec => {
		return <RecipeListItem onRecipeSelect={onRecipeSelect} recipe={rec} key={rec.id} />;
	});

	return (
		<div>
			<Header size="large" textAlign="center">Latest Recipes</Header>
			<Grid stackable columns={3}>
				{listitems}
			</Grid>
		</div>
	);
};

export default RecipeList;
