import React from 'react';
import {Row, Col} from 'reactstrap';


export default function RecipeBox(props) {
	const childrenWrapper = React.Children.map(props.children, child => {
		return (
			<Row noGutters>
				<Col xs="12">{child}</Col>
			</Row>
		);
	});
	
	return (
		<div className="RecipeBox">
			{childrenWrapper}
		</div>
	);
}