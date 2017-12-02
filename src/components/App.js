import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import recipesData from '../recipes.json';

import Header from './header/Header';
import Main from './main/Main';
import List from './main/List';
import Detail from './main/Detail';
import EditRecipe from './recipe/EditRecipe';
import CreateRecipe from './recipe/CreateRecipe';


class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			recipes: '',
			idGen: 6
		}
		
		this.updateRecipes = this.updateRecipes.bind(this);
		this.updateIdGen = this.updateIdGen.bind(this);
		this.recipeIndex = this.recipeIndex.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.nextRecipe = this.nextRecipe.bind(this);
	}
	
	componentDidMount() {
		if (localStorage.recipes !== undefined) {
			this.setState({recipes: JSON.parse(localStorage.recipes)});
			this.setState({idGen: JSON.parse(localStorage.idGen)});
		} else {
			this.setState(() => {
				return {recipes: recipesData.recipes};
			}, () => {
				localStorage.recipes = JSON.stringify(this.state.recipes);
				localStorage.idGen = JSON.stringify(this.state.idGen);
			});
		}
	}
	
	
	updateLocalStorage() {
		localStorage.recipes = JSON.stringify(this.state.recipes);
		localStorage.idGen = JSON.stringify(this.state.idGen);
	}
	
	updateRecipes(recipe) {
		// add new recipe
		if (recipe.id === undefined) {
			recipe.id = this.state.idGen;
			this.updateIdGen();
			
			// default image
			if (!recipe.imageSrc)
				recipe.imageSrc = "../../recipe-box/images/recipe.png";
			
			this.setState((prevState) => {
				let recipes = prevState.recipes;
				recipes.push(recipe);
				return {recipes: recipes};
			}, this.updateLocalStorage);
		
		// update edited recipe
		} else {
			this.setState((prevState) => {
				let recipes = prevState.recipes;
				recipes[this.recipeIndex(recipe.id)] = recipe;
				return {recipes: recipes};
			}, this.updateLocalStorage);
		}
	}
	
	removeRecipe(id) {
		this.setState((prevState) => {
			let recipes = prevState.recipes;
			recipes.splice(this.recipeIndex(id), 1);
			return {recipes: recipes};
		}, this.updateLocalStorage);
	}
	
	prevRecipe(id) {
		let prevRecipe = this.state.recipes[this.recipeIndex(id) - 1];
		if (prevRecipe)
			return prevRecipe.id;
		else
			return parseInt(id, 10);
	}
	
	nextRecipe(id) {
		let nextRecipe = this.state.recipes[this.recipeIndex(id) + 1];
		if (nextRecipe)
			return nextRecipe.id;
		else
			return parseInt(id, 10);
	}
	
	// get index of recipe in 'this.state.recipes' array
	recipeIndex(id) {
		if (!this.state.recipes)
			return;
		let index = this.state.recipes.findIndex((recipe) => {
			return recipe.id === parseInt(id, 10);
		});
		return index;
	}
	
	// increment id number 'this.state.idGen' for use in next recipe
	updateIdGen() {
		this.setState((prevState) => {
			let nextId = prevState.idGen + 1;
			return {idGen: nextId}
		});
	}
	
	
  render() {
    return (
      <div className="App">
				<Header
					title="Recipe Box"
				/>
				<Main>
					<Switch>
						<Route exact path="/" 
							render={() => <List recipes={this.state.recipes} />} 
						/>
						<Route path="/recipes/:id" render={({match, history}) => 
							<Detail 
								item={this.state.recipes[this.recipeIndex(match.params.id)]}
								removeRecipe={this.removeRecipe}
								prevRecipe={this.prevRecipe(match.params.id)}
								nextRecipe={this.nextRecipe(match.params.id)}
								history={history}
							/>} 
						/>
						<Route path="/create" render={({history}) => 
							<CreateRecipe 
								updateRecipes={this.updateRecipes} history={history}
							/>} 
						/>
						<Route path="/edit/:id"	render={({match, history}) => 
							<EditRecipe 
								recipe={this.state.recipes[this.recipeIndex(match.params.id)]} 
								updateRecipes={this.updateRecipes}
								history={history}
							/>}
						/>
					</Switch>
				</Main>
     
      </div>
    );
  }
}

export default App;