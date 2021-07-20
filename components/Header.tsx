import styles from "../styles/components/Header.module.scss";
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(){
  return(
    <header className={styles.header}>
      <nav className={styles.mobileNav}>
        <h1>BLOG TEMPLATE</h1>
        <MenuIcon/>
      </nav>
      <div>
        <h1>BLOG TEMPLATE</h1>
      </div>
      <nav className={styles.desktopNav}>
        <ul>
          <li> <a href="/">HOME</a></li>
          <li><a href="/">SHOPPING</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Forum</a></li>
        </ul>
      </nav>
    </header>
  )
} 