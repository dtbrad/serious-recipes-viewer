import React, { Component } from 'react';
import { Card, Grid, Container, Header, Segment, List, Image } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';

const RecipeList = props => {
	console.log(props.recipes);
	const listitems = props.recipes.map(rec => {
		return <RecipeListItem recipe={rec} />;
	});

	return (
		<Grid stackable columns={6}>
			{listitems}
		</Grid>
	);
};

export default RecipeList;
