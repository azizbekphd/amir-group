import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "./Breadcrumps.module.css"
import { IoIosArrowForward } from "react-icons/io"
import { server } from "../../config"
import { Product } from "../../models"

type Breadcrump = {
    route: string;
    title: string;
}

const Breadcrumps = () => {
    const [items, setItems] = useState<Breadcrump[]>([])
    
    const router = useRouter()

    type Title = {
        re: RegExp;
        title: string | (() => Promise<string>);
    }

    async function getTitle(path: string) {
        const titles: Title[] = [
            {
                re: /\//g,
                title: "Главная",
            },
            {
                re: /\/orders/g,
                title: "Заявки",
            },
            {
                re: /\/products/g,
                title: "Товары",
            },
            {
                re: /\/feedbacks/g,
                title: "Отзывы",
            },
            {
                re: /\/orders\/checkout/g,
                title: "Оформить заказ",
            },
            {
                re: /\/orders\/checkout/g,
                title: "Оформить заказ",
            },
            {
                re: /\/orders\/checkout\/[A-Za-z0-9]{1,}/g,
                title: async () => {
                    const id = path.split("/")[3]
                    const response = await fetch(`${server}/api/products/${id}`)
                    const body = await response.json()
                    const product: Product = body.product
                    return product.name;
                }
            }
        ]

        titles.sort((a,b)=>{
            const c1 = (s: Title) => s.re.toString().split("/").length
            const c2 = (s: Title) => s.re.toString().length
            return c1(b)-c1(a) || c2(b)-c2(a)
        })

        const t = titles.find((e) => e.re.test(path))!.title
        return typeof t === "string" ? t : await t()
    }

    useEffect(()=>{
        Promise.all(router.asPath.split("/").slice(1).map(async (e, i, a)=>{
            const p = ["", ...a.slice(0,i+1)].join("/")
            return {
                route: p,
                title: await getTitle(p) ?? "",
            }
        })).then((result) => setItems(result))
    },[router.asPath])

    return <nav className={styles.wrapper}>
        {items.map((item, i, a) => <div
            key={i.toString()}
            className={[
                "admin-breadCrumps-r",
                i === a.length-1 ? styles.last : ""
                ].join(" ")}>
            {
                i === a.length-1 ?
                <span>{item.title}</span> :
                <Link href={item.route}>
                    {item.title}
                    <IoIosArrowForward />
                </Link>
            }
        </div>)}
    </nav>;
}

export default Breadcrumps;
