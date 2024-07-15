import styles from "./Header.module.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <a href="/">ptrn.</a>
        <div className={styles.searchContainer}>
          <p>Buscar</p>
          <button className={styles.searchButton}><IoSearchSharp className={styles.searchIcon}/></button>
        </div>
        <MdOutlineMenu className={styles.menuIcon}/>
      </div>

      <div className={styles.extras}>
        <p>New arrivals</p>
        <p>Limited Availability</p>
        <p>Promotions</p>
        <p>Trending now</p>
        <p>Support</p>
      </div>
    </div>
  )
}
