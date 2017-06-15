import React, { Component } from 'react';
import axios from 'axios';

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = { people: [] };
	}

	componentDidMount() {
		axios.get('https://my-people-api').then(response => {
			this.setState({ people: response.data });
		});
	}

	render() {
		return (
			<div>
				{this.state.people[0]}
			</div>
		);
	}
}

export default Recipes;
