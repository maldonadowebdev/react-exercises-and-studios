import React from 'react';
import styles from './Description.module.css';




function RecipeAuthor(){
    let authorLink = "https://www.foodnetwork.com/recipes/alton-brown";
    let authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/alton-brown/FN-TalentAvatar-Alton-Brown.jpg.rend.hgtvcom.126.126.suffix/1532979092729.jpeg";
    let authorName = "Alton Brown";
    return (
        
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){
        return(
            <div> 
            <div>
                <h1>Creme Brulee</h1>
                <p>Short recipe description</p>
            </div>
                <RecipeAuthor />
            </div>
    );
}
};

export default RecipeDescription;