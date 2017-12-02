import React from 'react';
import {Row, Col} from 'reactstrap';

import './RecipeBox.css';

import Headline from './elements/Headline';
import Image from './elements/Image';


export default function RecipeHeader(props) {
	return (
		<div className="RecipeHeader">
			<Row noGutters>
				<Col xs="12" md="4">
					<Image 
						imageSrc={props.imageSrc} 
						description={props.description}
					/>
				</Col>
				<Col xs="12" md="8">
					<Headline
						title={props.title} 
						description={props.description} 
					/>
				</Col>
			</Row>
		</div>
	);
}