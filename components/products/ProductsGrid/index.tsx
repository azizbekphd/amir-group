import styles from "./ProductsGrid.module.css"
import ProductsGridItem from "./ProductsGridItem"
import PaginationControls from "./PaginationControls"
import { Product } from "../../../models"
import { Loading } from "../.."

export type ProductsGridProps = {
    products: Product[];
    pagination: {
        page: number;
        pageSize: number;
        total: number;
    }
}

const ProductsGrid = ({products, pagination}: ProductsGridProps) => {
    return <div>
        <h3 className={[
            "admin-main-m",
            styles.title
        ].join(" ")}>{`Все товары (${pagination.total})`}</h3>
        <div className={styles.grid}>
            {products ?
                products.map((product) => (
                    <ProductsGridItem product={product} key={product.id}/>
                )) :
                <Loading />}
        </div>
        <PaginationControls
            currentPage={pagination.page}
            pages={pagination.pageSize}
            onChange={(p)=>{}}
        />
    </div>
}

export default ProductsGrid;
