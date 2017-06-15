import React, { Component } from 'react';
import { Grid, Container, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

class RecipeViewer extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [], recipe: '' };
	}

	componentDidMount() {
		axios.get('https://serious-recipes-api.herokuapp.com/recipes').then(response => {
			this.setState({ recipes: response.data });
		});
	}

	loadSelectedRecipe(id) {
		axios.get(`https://serious-recipes-api.herokuapp.com/recipes/${id}`).then(response => {
			this.setState({ recipe: response.data });
		});
	}

	render() {
		return (
			<Container>
				<Grid stackable columns={2}>
					<div className=" ten wide column">
						<RecipeDetail recipe={this.state.recipe} />
					</div>
					<div className="six wide column">
						<Segment>
							<Header size="large" textAlign="center">Latest Recipes</Header>
							<RecipeList
								recipes={this.state.recipes}
								onRecipeSelect={selectedRecipe => this.loadSelectedRecipe(selectedRecipe.id)}
							/>
						</Segment>
					</div>
				</Grid>
			</Container>
		);
	}
}

export default RecipeViewer;
