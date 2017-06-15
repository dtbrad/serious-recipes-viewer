import React, { Component } from 'react';
import { Container, Header, Segment, List, Image } from 'semantic-ui-react';

const RecipeTest = props => {
	console.log(props.recipes);
	// const listitems = props.recipes.map(rec => {
	// 	return <recipeListItem recipe={rec} />;
	// });

	return <p>this is recipe test</p>;
};

export default RecipeTest;
