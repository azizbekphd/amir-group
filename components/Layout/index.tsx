import React from "react"
import { AppBar, Menu, Breadcrumps } from ".."
import styles from "./Layout.module.css"

const Layout = ({children}: React.ReactNode) => {
    return (
    <>
        <AppBar notifications={1}/>
        <div className={styles.main}>
            <Menu />
            <div className={styles.content}>
                <Breadcrumps />
                { children }
            </div>
        </div>
    </>
    );
}

export default Layout;
