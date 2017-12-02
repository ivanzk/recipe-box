import React from 'react';
import {Col, Form, FormGroup, Label, Input} from 'reactstrap';

import './EditRecipe.css';

import EditNavbar from './EditNavbar';


export default class EditRecipe extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			recipe: {
				id: undefined,
				title: '',
				description: '',
				imageSrc: '',
				ingredients: '',
				recipe: ''
			},
			navigate: false
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		if (this.props.recipe) {
			this.setState((prevState, prevProps) => {
				return {
					recipe: {
						id: prevProps.recipe.id,
						title: prevProps.recipe.title,
						description: prevProps.recipe.description,
						imageSrc: prevProps.recipe.imageSrc,
						ingredients: prevProps.recipe.ingredients,
						recipe: prevProps.recipe.recipe
					}
				}
			});
		}
	}
	
	
	handleChange(e) {
		let property = e.target.id,
				value = e.target.value;
		this.setState((prevState) => {
			let stateRecipe = Object.assign({}, prevState.recipe);
			stateRecipe[property] = value;
			return {recipe: stateRecipe}
		});
	}
	
	handleSubmit() {
		if (this.state.recipe.title 
				&& this.state.recipe.description 
				&& this.state.recipe.ingredients 
				&& this.state.recipe.recipe) {
			
			if (!this.state.recipe.imageSrc)
				this.setState({recipe: {imageSrc: "/images/sandwich.jpg"}});
			
			this.props.updateRecipes(this.state.recipe);
			this.props.history.push('/recipes/' + this.state.recipe.id);
		}
	}
	
	
	render() {
		return (
			<div className="EditRecipe">
				<Form>
					<FormGroup row>
						<Label for="title" xs={12} md={3}>Recipe Name</Label>
						<Col xs={12} md={9}>
						<Input type="text" id="title" placeholder="Recipe Name"
							value={this.state.recipe.title}
							onChange={this.handleChange}
							valid={this.state.recipe.title !== '' ? true : false}
						/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="description" xs={12} md={3}>Description</Label>
						<Col xs={12} md={9}>
							<Input type="text" id="description" placeholder="Description" 
								value={this.state.recipe.description}
								onChange={this.handleChange}
								valid={this.state.recipe.description !== '' ? true : false}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="imageSrc" xs={12} md={3}>Image Link</Label>
						<Col xs={12} md={9}>
							<Input type="text" id="imageSrc" placeholder="http://image_location" 
								value={this.state.recipe.imageSrc}
								onChange={this.handleChange}
								valid={true}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="ingredients" xs={12} md={3}>Ingredients</Label>
						<Col xs={12} md={9}>
							<Input type="textarea" id="ingredients" 
								placeholder="- Ingredient"
								rows={10}
								value={this.state.recipe.ingredients}
								onChange={this.handleChange}
								valid={this.state.recipe.ingredients !== '' ? true : false}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="recipe" xs={12} md={3}>Recipe</Label>
						<Col xs={12} md={9}>
							<Input type="textarea" id="recipe" 
								placeholder="Recipe Text" 
								rows={10}
								value={this.state.recipe.recipe}
								onChange={this.handleChange}
								valid={this.state.recipe.recipe !== '' ? true : false}
							/>
						</Col>
					</FormGroup>
				</Form>
				<EditNavbar 
					handleSubmit={this.handleSubmit}
					history={this.props.history}
					recipeId={this.state.recipe.id}
				/>
			</div>
		);
	}
}