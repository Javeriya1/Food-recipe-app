import React from 'react';
import RecipeItem from './RecipeItem';

const Reciepe = (props) => {
    const { recipes } = props;
    return (
        <div class="row">
            {
                recipes.map(recipe => (
                   <RecipeItem name = {recipe.recipe.label}
                   image = {recipe.recipe.image}
                   ingredientLines = {recipe.recipe.ingredientLines}/>
                ))
            }
        </div>
    )
}

export default Reciepe;