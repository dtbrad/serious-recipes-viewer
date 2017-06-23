import React, { Component } from 'react';
import { Image, Divider, Grid, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';
import selogo from './images/se-logo.jpg';

const URL = process.env.REACT_APP_URL;

class RecipeViewer extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [], recipe: '' };
	}

	componentDidMount() {
		axios.get(`${URL}/recipes`).then(response => {
			this.setState({ recipes: response.data });
			this.loadSelectedRecipe(this.state.recipes[0].id);
		});
	}

	loadSelectedRecipe(id) {
		axios.get(`${URL}/recipes/${id}`).then(response => {
			this.setState({ recipe: response.data });
		});
	}

	changeTitle(newTitle) {
		axios.patch(`${URL}/recipes/${this.state.recipe.id}`, { newTitle: newTitle }).then(response => {
			this.setState({ recipe: response.data });
			axios.get(`${URL}/recipes`).then(response => {
				this.setState({ recipes: response.data });
			});
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
				<br />
				<Grid stackable columns={2}>
					<div className=" ten wide column">
						<RecipeDetail recipe={this.state.recipe} onTitleChange={newTitle => this.changeTitle(newTitle)} />
					</div>
					<div className="six wide column">
						<RecipeList
							recipes={this.state.recipes}
							featured_id={this.state.recipe.id}
							onRecipeSelect={selectedRecipe => this.loadSelectedRecipe(selectedRecipe.id)}
						/>
					</div>
				</Grid>
			</Container>
		);
	}
}

export default RecipeViewer;
