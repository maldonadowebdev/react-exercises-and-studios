//import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    let ingredients = ["Heavy Cream", "Vanilla Bean", "Vanilla Sugar", "6 Egg Yolks", "Hot Water"];
    return(
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {ingredients.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
        </ul>
     </div>
    )
}