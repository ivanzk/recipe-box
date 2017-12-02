import React from 'react';
import {Container} from 'reactstrap';

import './Main.css';


export default function Main(props) {
	return (
		<div className="Main my-1 my-md-3 my-xl-4">
			<Container>
				{props.children}
			</Container>
		</div>
	);
}