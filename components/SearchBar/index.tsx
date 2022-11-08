import styles from "./SearchBar.module.css"
import { IoSearchOutline } from "react-icons/io5"

const SearchBar = () => {
    return <div className={styles.wrapper}>
        <input
            className={[
                "admin-main-m",
                styles.input
            ].join(" ")}
            placeholder="Поиск по названию товара"
        />
        <button type="submit" className={styles.button}>
            <IoSearchOutline className={styles.buttonIcon} />
        </button>
    </div>
}

export default SearchBar;
