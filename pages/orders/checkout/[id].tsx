import { useRouter } from "next/router"
import Head from "next/head"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import styles from "../../../styles/ProductDetails.module.css"
import { Product, InstallmentPlan, Sale } from "../../../models"
import { server } from "../../../config"
import { productsDemo } from "../../../demos"
import {
    SaleIcon, ProductGallery, Divider, Toggler, SalesList, Button, GoToBasket
} from "../../../components"
import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"

type ProductDetailsProps = {
    product: Product;
}

const ProductDetails: NextPage<ProductDetailsProps> = ({product}) => {
    const router = useRouter()
    const { id } = router.query;

    const [inst, setInst] = useState<InstallmentPlan>(
        product.installmentPlans.sort((a,b)=>a.months-b.months)[0]
    )

    const [sales, setSales] = useState<Sale[]>(product.sales)

    return <>
        <Head>
            <title>{product.name}</title>
        </Head>
        <main className={styles.main}>
            <h1 className="admin-heading-sb">
                {product.name}
            </h1>
            <GoToBasket />
            <div className={styles.generalInfo}>
                <div className={styles.imageWrapper}>
                    <div className={styles.salesSmall}>
                        {product.sales.map((sale, i) => <SaleIcon
                            key={i.toString()}
                            sale={sale}/>)}
                    </div>
                    <ProductGallery images={product.images} width={480} />
                </div>
                <div className={styles.textInfo}>
                    <div className={`admin-main-r ${styles.heading}`}>
                        Цена телефона
                    </div>
                    <div className="admin-button-sb">
                        {product.price} сум
                    </div>
                    <Divider />
                    <div className={styles.row}>
                        <div>
                            <div className={`admin-main-r ${styles.heading}`}>
                                Общая цена (с наценкой)
                            </div>
                            <div className="admin-button-sb">
                                {Math.floor((100+inst.markup)/100 * product.price)} сум
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={`admin-main-sb ${styles.monthlyFee}`}>
                                {Math.floor(((100+inst.markup)/100 * product.price)/inst.months)} сум
                            </div>
                            <div className={`admin-small-r ${styles.months}`}>
                                x{inst.months}
                            </div>
                        </div>
                    </div>
                    <div className={styles.togglerWrapper}>
                        <Toggler
                            onChange={setInst}
                            selected={inst.months}
                            items={product.installmentPlans.map(
                                (i) => {
                                    return {
                                        title: `${i.months} мес`,
                                        value: i,
                                        key: i.months,
                                    }
                                }
                            )} />
                    </div>
                    <div className={styles.markup}>
                        <span className="admin-main-r">Наценка</span>
                        <span className="admin-main-sb">{inst.markup}%</span>
                    </div>
                    <Divider />
                    <div className={styles.characteristic}>
                        <div className={`admin-main-r ${styles.heading}`}>
                            Общие характеристики
                        </div>
                        <div className="admin-main-r">
                            {product.characteristic.map((c, i) => <span key={i.toString()}>{`${c.name}: ${c.value}`}<br/></span>)}
                        </div>
                        <div className={styles.showAll}>
                            <span className="admin-button-sb">
                                Показать все
                            </span>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
            <SalesList
                sales={sales}
                setSales={setSales}
            />
            <Button onClick={()=>{}}>Добавить в корзину</Button>
        </main>
    </>
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            ...productsDemo.map((e) => `/orders/checkout/${e.id}`)
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = ctx.params!.id;
    const response = await fetch(`${server}/api/products/${id}`);
    const body = await response.json();
    return {
        props: body,
    }
}

export default ProductDetails;
