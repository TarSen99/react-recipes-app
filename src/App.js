import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import './App.css';

const API_KEY = 'f6755d5412bb133108b99fd236650c96';

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = async (event) => {
    event.preventDefault();

    const recipeName = event.target.elements.recipeName.value;
    const response = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await response.json();

    this.setState({
      recipes: data.recipes,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form onSubmit={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;