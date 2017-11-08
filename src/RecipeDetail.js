import React, { Component } from 'react';
import { Grid, Header, Segment, List, Image } from 'semantic-ui-react';

class RecipeDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { edit: false, newTitle: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onTitleChange(this.state.newTitle);
		this.setState({ edit: !this.state.edit, newTitle: '' });
	}

	render() {
		const recipe = this.props.recipe;
		if (recipe === '') {
			return <Header size="large" textAlign="center">Pick a recipe...</Header>;
		} else {
			const directions = recipe.directions.map(dir => {
				return <Segment size="large" key={dir.place} place={dir.place} >{dir.content}</Segment>;
			});
			const ingredients = recipe.ingredients.map(ing => {
				return <List.Item size="large" key={ing.id}> {ing.name} </List.Item>;
			});

			return (
				<Grid.Column>
					<Header size="large" textAlign="center">
						Featured Recipe
					</Header>
					<Image fluid src={recipe.thumbnail} />
					<Header>
						<h2>{recipe.display_title}</h2>
					</Header>

						<Header>Ingredients</Header>
						<Segment>
								<div>{ingredients}</div>
				</Segment>

					<div>
						<Header>Directions</Header>
						<Segment.Group>
						{directions}
					</Segment.Group>
				</div>
				</Grid.Column>
			);
		}
	}
}

export default RecipeDetail;
