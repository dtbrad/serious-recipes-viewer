import React from 'react';
import RecipeViewer from './RecipeViewer';
import About from './About';
import Home from './Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Menu size="massive" stackable inverted>
					<Menu.Item header as={Link} name="home" to="/">SERIOUS RECIPES VIEWER</Menu.Item>
					<Menu.Item as={Link} name="recipes" to="recipes">recipes</Menu.Item>
					<Menu.Item as={Link} name="about" to="about">about</Menu.Item>
				</Menu>

				<Route path="/recipes" component={RecipeViewer} />
				<Route path="/about" component={About} />
				<Route exact path="/" component={Home} />
			</div>
		</BrowserRouter>
	);
};

export default App;
