import React from 'react';
const Recipe = ({title,calories, img, ingredients}) => {
   return( 
    <div>
    <h1>{title}</h1>
    <ol> {ingredients.map(ingredient => ( 
        <li>{ingredients.text}</li>
    ))}
    </ol>
    <p>{calories}</p>
    <img src={img} alt =''/>

    </div>

   );



}

export default Recipe;