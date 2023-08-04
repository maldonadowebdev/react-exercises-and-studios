import styles from './Description.module.css';
export default function RecipePhoto(){
    return(
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/EA0914_creme-brulee_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1382539982692.jpeg" alt = "Photo" className = {styles.imageUpdates} height = "300px" width = "300px" />
    )
}