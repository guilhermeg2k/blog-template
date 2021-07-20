import styles from "../styles/components/SocialMediasCard.module.scss";
import {Facebook, Twitter, Pinterest, Instagram} from "@material-ui/icons";

export default function SocialMediasCard(){
  return (
    <table className={styles.socialMediasCard} cellSpacing="0">

      <tr className={styles.socialMedia}>
        <td>
          <i><Facebook/></i>
        </td>
        <td>
          FACEBOOK
        </td>
        <td>
        <a href="/">Like</a>
        </td>
      </tr>

      <tr className={styles.socialMedia}>
        <td>
          <i><Twitter/></i>
        </td>
        <td>
          Twitter
        </td>
        <td>
        <a href="/">Follow</a>
        </td>
      </tr>

      <tr className={styles.socialMedia}>
        <td>
          <i><Pinterest/></i>
        </td>
        <td>
          Pinterest
        </td>
        <td>
          <a href="/">Follow</a>
        </td>
      </tr>
      
      <tr className={styles.socialMedia}>
        <td>
          <i><Instagram/></i>
        </td>
        <td>
          Instagram
        </td>
        <td>
          <a href="/">Follow</a>
        </td>
      </tr>
    </table>
  )
}