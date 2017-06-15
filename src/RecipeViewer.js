import React, { Component } from 'react';
import { Container, Header, Segment, List, Image } from 'semantic-ui-react';
import axios from 'axios';
import RecipeList from './RecipeList.js';
import RecipeTest from './RecipeTest.js';

class RecipeViewer extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: ['recipe 1', 'recipe 2'], hell: 'daniel brad theodore' };
	}

	componentDidMount() {
		axios.get('https://serious-recipes-api.herokuapp.com/recipes').then(response => {
			this.setState({ recipes: response.data });
		});
	}

	render() {
		return (
			<Container>
				<Header size="large" textAlign="center">Latest Recipes</Header>
				<RecipeList recipes={this.state.recipes} />
			</Container>
		);
	}
}

export default RecipeViewer;
