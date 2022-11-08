import React from "react"
import Link from "next/link"
import styles from "./Menu.module.css"

export type MenuItemProps = {
    icon: React.ReactNode;
    title: string;
    route: string;
    selected?: boolean;
}

const MenuItem = ({icon, title, route, selected}: MenuItemProps) => {
    return <Link href={route} className={[
            styles.menuItem,
            selected ? styles.selected : ""
        ].join(" ")}>
        { React.cloneElement(icon as React.ReactElement, {
            className: styles.menuItemLeading,
        }) }
        <div className="admin-main-m">{ title }</div>
    </Link>;
}

export { MenuItem };
