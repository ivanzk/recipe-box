import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'reactstrap';

import './List.css';

import RecipeBox from '../recipe/RecipeBox';
import Image from '../recipe/elements/Image';
import Headline from '../recipe/elements/Headline';


export default function List(props) {
	if (!props.recipes)
		return null;

	return (
		<div className="List">
			<Row noGutters>
				{
					props.recipes.map((item, i) =>
						<Col key={i} xs={12} md={6} xl={4} >
							<RecipeBox>
								<Link to={"/recipes/" + item.id}>
									<Row noGutters>
										<Col xs={6} md={12} >
											<Image 
												imageSrc={item.imageSrc} 
												description={item.description}
											/>
										</Col>
										<Col xs={6} md={12} >
											<Headline 
												title={item.title}
												description={item.description}
											/>
										</Col>
									</Row>
								</Link>
							</RecipeBox>
						</Col>
					)
				}
			</Row>
		</div>
	);
}