import React, { Component } from 'react';
import { TextArea, Form, Button, Input, Icon, Grid, Header, Segment, List, Image } from 'semantic-ui-react';

class DisplayInput extends Component {
	constructor(props) {
		super(props);
		this.state = { edit: true, newValue: this.props.content };
	}

	doSomething(event) {
		// event.preventDefault();
		debugger;
		// this.props.onTitleChange(this.state.newTitle);
		// this.setState({ edit: !this.state.edit, newTitle: '' });
	}

	render() {
		const displayable = <List.Item> {this.props.place + '.'} {this.props.content} </List.Item>;

		const editable = (
			<Form onSubmit={this.doSomething}>
				<Form.Field
					control={TextArea}
					autoHeight={true}
					value={this.state.newValue}
					onChange={event => {
						this.setState({ newValue: event.target.value });
					}}
				/>
			</Form>
		);

		const content = this.state.edit === false ? displayable : editable;

		return (
			<div>
				{content}
				<Button name="edit" onClick={click => this.setState({ edit: !this.state.edit })}>click</Button>
			</div>
		);
	}
}

export default DisplayInput;
