import { MenuItem, MenuItemProps } from "./MenuItem"
import { useRouter } from "next/router"
import styles from "./Menu.module.css"

import { GrHomeRounded } from "react-icons/gr"
import { RiShoppingCart2Line, RiFileList2Line } from "react-icons/ri"
import { BsHandbag } from "react-icons/bs"
import { SlStar } from "react-icons/sl"

const Menu = () => {
    const items: MenuItemProps[] = [
        {
            icon: <GrHomeRounded />,
            title: "Главная",
            route: "/",
        },
        {
            icon: <RiFileList2Line />,
            title: "Заказы",
            route: "/orders",
        },
        {
            icon: <BsHandbag />,
            title: "Товары",
            route: "/products",
        },
        {
            icon: <SlStar />,
            title: "Отзывы",
            route: "/feedbacks",
        },
        {
            icon: <RiShoppingCart2Line />,
            title: "Оформить заказ",
            route: "/orders/checkout",
        },
    ];

    const sortedItems = items.slice().sort((a,b)=>{
        const c1 = (s: MenuItemProps) => s.route.toString().split("/").length
        const c2 = (s: MenuItemProps) => s.route.toString().length
        return c1(b)-c1(a) || c2(b)-c2(a)
    })

    const router = useRouter();

    return <nav className={styles.wrapper}>
        <ul>
           {items.map((item, i) => <MenuItem
                {...item}
                key={i.toString()}
                selected={sortedItems.find((_) => router.asPath.startsWith(_.route))!.route === item.route}
            />)} 
        </ul>
    </nav>
}

export default Menu;
