import React, { Component } from 'react';
import { Image, Divider, Grid, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';
import selogo from './images/se-logo.jpg';

class RecipeViewer extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [], recipe: '' };
	}

	componentDidMount() {
		axios.get('https://serious-recipes-api.herokuapp.com/recipes').then(response => {
			this.setState({ recipes: response.data });
			this.loadSelectedRecipe(this.state.recipes[0].id);
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
				<br />
				<Header textAlign="center" as="h1">
					<Image src={selogo} />
					{' '} Latest Recipes Viewer
				</Header>
				<Divider />
				<Grid stackable columns={2}>
					<div className=" ten wide column">
						<RecipeDetail recipe={this.state.recipe} />
					</div>
					<div className="six wide column">
						<RecipeList
							recipes={this.state.recipes}
							onRecipeSelect={selectedRecipe => this.loadSelectedRecipe(selectedRecipe.id)}
						/>
					</div>
				</Grid>
			</Container>
		);
	}
}

export default RecipeViewer;
