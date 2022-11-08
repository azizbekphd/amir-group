import Link from "next/link"
import { IoNotifications, IoPersonCircle } from "react-icons/io5"
import styles from "./AppBar.module.css"

type AppBarProps = {
    notifications: number;
}

const AppBar = ({notifications}: AppBarProps) => {
    return <header className={styles.wrapper}>
        <div className={styles.appBar}>
            <span className={[styles.logo].join(" ")}>
                LOGO
            </span>
            <div className={styles.actions}>
                <button className={styles.notifications}>
                    <IoNotifications className={styles.actionsIcon}/>
                    <span className={styles.notificationCount}>
                        { notifications }
                    </span>
                </button>
                <Link href="/profile" className={styles.profileLink}>
                    <span className="admin-main-r">Личный кабинет</span>
                    <IoPersonCircle className={styles.profileLinkIcon} />
                </Link>
            </div>
        </div>
    </header>;
}

export default AppBar;
