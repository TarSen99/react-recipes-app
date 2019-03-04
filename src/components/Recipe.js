import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'f6755d5412bb133108b99fd236650c96';

class Recipe extends React.Component {
  state = {
    activeRecipe: {},
  };

  async componentDidMount() {
    const title = this.props.location.state.recipe;

    const response = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const data = await response.json();
    console.log(data);

    this.setState({
      activeRecipe: data.recipes[0],
    });
  }

  render() {
    const { image_url: imageUrl, title, publisher, publisher_url: publisherUrl } = this.state.activeRecipe;

    return (
      this.state.activeRecipe.length > 0 &&
      <div className="container">
        <div className="active-recipe">
          <img
            className="active-recipe__img"
            src={imageUrl}
            alt={title}
          />
          <h3 className="active-recipe__title">{ title }</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>{ publisher }</span>
          </h4>
          <p className="active-recipe__website">
            Website: <span><a href={publisherUrl}>{publisherUrl}</a></span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go back</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Recipe;