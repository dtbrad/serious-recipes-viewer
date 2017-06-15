import React from 'react';
import { Item, Card, Grid, Container, Header, Segment, List, Image } from 'semantic-ui-react';

const RecipeListItem = props => {
	console.log(props.recipe);

	return (
		<Grid.Column>
			<Item>
				<Image src={props.recipe.thumbnail} />
				<h5>{props.recipe.title}</h5>
			</Item>
		</Grid.Column>
	);
};

export default RecipeListItem;
