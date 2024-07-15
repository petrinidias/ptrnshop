import styles from "./page.module.css";
import { AiOutlineTrademark } from "react-icons/ai";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Saudacao from ".//saudacao"

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.titulo}>
        <p>COGNAC, FRANCE <Saudacao/></p>
        <p><em className={styles.alternativeFont}>Anneau</em>Etoile<AiOutlineTrademark className={styles.trademark}/></p>
        <p>LUXE EN BAGUES EN ARGENT MASSIF</p>
        <p>PAR GILBERTO PETRINI</p>
      </div>
      <div>
        <a href="/shop" className={styles.button}>Start buying <HiMiniArrowLongRight className={styles.rightArrow}/></a>
      </div>
    </div>
  )
}
