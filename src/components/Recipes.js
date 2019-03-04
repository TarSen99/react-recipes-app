import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = (props) => {
  return (
    <div className="container">
      <div className="row">
        {
          props.recipes.map(recipe => {
            return (
              <div
                key={recipe.recipe_id}
                className="col-md-4"
                style={{
                  marginBottom: '2rem'
                }}
              >
                <div className="recipes__box">
                  <img
                    src={recipe.image_url}
                    alt={recipe.title}
                    className="recipes__box-img"
                  />
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {recipe.title.length < 20 ? recipe.title : `${recipe.title.slice(0,20)}...`}
                    </h5>
                    <p className="recipes__subtitle">
                      Publisher :
                      <span>
                        {recipe.publisher}
                      </span>
                    </p>
                  </div>
                  <button className="recipe_buttons">
                    <Link to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                      }}
                    >
                      View recipe
                    </Link>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Recipes;