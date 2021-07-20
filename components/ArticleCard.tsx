import { style } from "@material-ui/system";
import styles from "../styles/components/ArticleCard.module.scss";

interface ArticleCardProps{
  title: string;
  imageURL: string;
  text: string;
  createdBy: string;
  createdAt: string;
}

export default function ArticleCard({title, imageURL, text, createdBy, createdAt}: ArticleCardProps){
  return (
    <div className={styles.articleCard}>
      <div>
        <img src={imageURL} alt="article image cover" />
      </div>
      
      <article>
        <h1>{title}</h1>
        <p>{text}</p>
        <span>by {createdBy} {createdAt}</span>
      </article>
    </div>
  )
}