import styles from "./SalesList.module.css"
import SalesListItem from "./SalesListItem"
import { Sale } from "../../../models"

type SalesListProps = {
    sales: Sale[],
    setSales: React.Dispatch<React.SetStateAction<Sale[]>>
}

const SalesList = ({sales, setSales}: SalesListProps) => {
    return <div className={styles.wrapper}>
        <div className={`admin-button-sb ${styles.title}`}>
            Акции
        </div>
        {sales.map((sale, i, a) => <SalesListItem
            key={i.toString()}
            sale={sale}
            onChange={(s)=>{
                setSales(sales.map((_) => _.saleType === s.saleType ? s : _))
            }}
            last={i === a.length - 1} />)}
    </div>
}

export default SalesList;
