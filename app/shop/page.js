import styles from "./page.module.css";
import Header from "../componentes/header"
import ItemShop from "../componentes/itemShop";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>

      <div className={styles.adicionais}>
        <p>340 Products</p>
        <div className={styles.ordernar}>
          <p>Sort by</p>
          <p>Relevance</p>
          <IoMdArrowDropdown/>
        </div>
      </div>

      <div className={styles.itens}>
        <ItemShop
        imagem="anel1.jpg" titulo="Lueur Liquide" preco="399,90"
        />
        <ItemShop
        imagem="anel2.jpg" titulo="Brillance Argentée" preco="299,90"
        />
        
      </div>
    </div>
  )
}
