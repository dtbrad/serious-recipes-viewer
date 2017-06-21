import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Input, Icon, Grid, Header, Segment, List, Image } from 'semantic-ui-react';

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
				return <List.Item size="large" key={dir.place}>{dir.place}. {dir.content}</List.Item>;
			});
			const ingredients = recipe.ingredients.map(ing => {
				return <List.Item size="large" key={ing.id}>{ing.name}</List.Item>;
			});
			const title = this.state.edit
				? <Form onSubmit={this.handleSubmit}>

						<Input
							size="massive"
							fluid={true}
							placeholder={recipe.display_title}
							value={this.state.newTitle}
							onChange={event => {
								this.setState({ newTitle: event.target.value });
							}}
						/>
						<Button fluid={true} type="submit" value="Submit">submit</Button>

					</Form>
				: <h2>{recipe.display_title}</h2>;

			return (
				<Grid.Column>
					<Header size="large" textAlign="center">
						Featured Recipe <Icon name="edit" onClick={click => this.setState({ edit: !this.state.edit })} />
					</Header>
					<Image fluid src={recipe.thumbnail} />
					<Header>{title}</Header>
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
	}
}

export default RecipeDetail;
