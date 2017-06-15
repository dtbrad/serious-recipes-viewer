import React from 'react';
import { Grid, Header, Segment, List, Image } from 'semantic-ui-react';

const RecipeDetail = ({ recipe }) => {
	console.log(recipe);
	if (recipe === '') {
		return <Header size="large" textAlign="center">Pick a recipe...</Header>;
	} else {
		const directions = recipe.directions.map(dir => {
			return <List.Item size="large" key={dir.place}>{dir.place}. {dir.content}</List.Item>;
		});
		const ingredients = recipe.ingredients.map(ing => {
			return <List.Item size="large" key={ing.id}>{ing.name}</List.Item>;
		});

		return (
			<Grid.Column>
				<Image fluid src={recipe.thumbnail} />
				<Header size="huge" textAlign="center">{recipe.title}</Header>
				<Segment>
					<Header>Ingredients</Header>
					<List divided relaxed>{ingredients}</List>
				</Segment>
				<Segment>
					<Header>Directions</Header>
					<List divided relaxed>{directions}</List>
				</Segment>
			</Grid.Column>
		);
	}
};

export default RecipeDetail;
