import React from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add-circle';
import List from 'material-ui/svg-icons/action/view-list';
import Github from 'material-ui-community-icons/icons/github-circle';

import './Header.css';


export default function Header(props) {
	return (
		<div className="Header">
			<Toolbar className="Toolbar">
				<ToolbarTitle className="ToolbarTitle" 
					text={<Link to="/">Recipe Box</Link>}
				/>
				
				<ToolbarGroup className="ToolbarGroupRight">
					<IconButton className="Icon" containerElement={<Link to="/"/>}
						tooltip="View All Recipes" tooltipPosition="bottom-center">
						<List />
					</IconButton>
					<IconButton className="Icon" containerElement={<Link to="/create"/>}
						tooltip="Create New Recipe" tooltipPosition="bottom-center">
						<Add  />
					</IconButton>
					<IconButton className="Icon Icon-left" 
						containerElement={<a href="https://github.com/ivanzk/recipe-box">Github Repo</a>}
						tooltip="Github" tooltipPosition="bottom-center">
						<Github  />
					</IconButton>
				</ToolbarGroup>
			</Toolbar>
		</div>
	);
}
