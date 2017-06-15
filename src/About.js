import React from 'react';
import { Header, Container } from 'semantic-ui-react';

const About = () => {
	return (
		<Container text>
			<Header as="h1" textAlign="center">About Serious Recipes Viewer</Header>
			<p>
				Serious Recipes Viewer is a simple web application I built that converts parts of a Ruby CLI application I built
				a year and a half ago into a React client side application served by a Rails API.
			</p>
		</Container>
	);
};

export default About;
