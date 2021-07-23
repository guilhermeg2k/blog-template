import {useState} from  'react';
import styles from "../styles/components/Header.module.scss";
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  const [showMobileMenuLinks, setshowMobileMenuLinks] = useState(false);
  function toggleMobileMenuLinks(){
    setshowMobileMenuLinks(!showMobileMenuLinks);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.mobileNav}>
        <h1>BLOG TEMPLATE</h1>
        <MenuIcon onClick={toggleMobileMenuLinks} />
      </nav>
      {
        showMobileMenuLinks ? 
        <nav className={styles.mobileNavLinks}>
          <div className={styles.mobileNavLinksWrapper}>
            <ul>
              <li> <a href="/">HOME</a></li>
              <li><a href="/">SHOPPING</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Forum</a></li>
            </ul>
          </div>
        </nav> : <></>
      }
      
      <div>
        <h1>BLOG TEMPLATE</h1>
      </div>
      <nav className={styles.desktopNav}>
        <div className={styles.desktopNavWrapper}>
          <ul>
            <li> <a href="/">HOME</a></li>
            <li><a href="/">SHOPPING</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Forum</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}