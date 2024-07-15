import styles from "./itemShop.module.css"

export default function ItemShop(props) {
    return (
      <div className={styles.main}>
            <img src={props.imagem} className={styles.itemImg}></img>
            <p className={styles.productTitle}>{props.titulo}</p>
            <p>Exclusive by PTRN</p>
            <div className={styles.priceNsizes}>
                <p>€{props.preco}</p>
                <p>Free shipping</p>
            </div>
      </div>
    )
  }