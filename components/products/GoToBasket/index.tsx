import styles from "./GoToBasket.module.css"
import { RiShoppingCart2Line } from "react-icons/ri"

const GoToBasket = () => {
    return <div className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.alwaysVisible}>
                <RiShoppingCart2Line size={24} stroke={"var(--white)"} />
            </div>
            <div className={styles.text}>
                Перейти в корзину
            </div>
            <div className={styles.count}>
                1
            </div>
        </div>
    </div>
}

export default GoToBasket;
