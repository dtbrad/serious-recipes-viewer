import React, { Component } from 'react';
import { Message, Image, Divider, Grid, Container, Header } from 'semantic-ui-react';
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
				<Message>
					<Header>
						This is a simple React application tied to a Rails API that scrapes the most recent recipes from the <a href='http://www.serious-eats.com' target='blank'>Serious Eats</a> website
					</Header>
					<Divider />
					<Header textAlign="center">
					<a href='https://github.com/dtbrad/serious-recipes-viewer' target='blank'>App Repository</a> | <a href='http://serious-recipes-api.herokuapp.com/recipes' target='blank'>Rails API</a> |
					<a href='https://github.com/dtbrad/serious-recipes-api' target='blank'>Rails API Repository</a>
				</Header>
				</Message>
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
