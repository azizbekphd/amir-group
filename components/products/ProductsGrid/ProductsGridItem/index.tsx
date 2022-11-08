import styles from "./ProductsGridItem.module.css"
import { Product, InstallmentPlan } from "../../../../models"
import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { SaleIcon } from "../.."

type ProductsGridItemProps = {
    product: Product;
}

const ProductsGridItem = ({product}: ProductsGridItemProps) => {
    
    interface Installment {
        startingFrom: number,
        months: number,
    }

    const installment = useMemo<Installment>(() => {
        const inst: InstallmentPlan = product.installmentPlans
           .sort((a,b) => {
               const f = (c: InstallmentPlan) => (100 + c.markup)/c.months;
               return f(a)-f(b);
           })[0]
        return {
            startingFrom: Math.floor((1+inst.markup/100)*product.price/inst.months),
            months: inst.months,
        }
    },[product])

    return <Link className={styles.item} href={`/orders/checkout/${product.id}`}>
        <div className={styles.imageWrapper}>
            <div className={styles.sales}>
                {product.sales.map((sale,i) => <SaleIcon
                    key={i.toString()}
                    sale={sale}
                />)}
            </div>
            <Image
                className={styles.image}
                src={product.images[0]}
                alt={product.name}
                height={136}
                width={168}
            />
        </div>
        <div className={styles.info}>
            <div className={styles.name}>
                <h4 className="app-main-r">
                    {product.name}
                </h4>
            </div>
            <div className={styles.price}>
                <h3 className="app-price-m">
                    {product.price} сум
                </h3>
            </div>
            <div className={styles.startingFrom}>
                <h5>
                    {`от ${installment.startingFrom} сум`}
                </h5>
            </div>
            <div className={styles.months}>
                <h6>
                    x{installment.months}
                </h6>
            </div>
        </div>
    </Link>
}

export default ProductsGridItem;
