import styles from "./SalesList.module.css"
import { Sale } from "../../../models"
import { Divider, SaleIcon, Checkbox } from "../../../components"

type SaleListItemProps = {
    sale: Sale,
    onChange: (s: Sale) => void,
    last: boolean,
}

const SalesListItem = ({ sale, onChange, last }: SaleListItemProps) => {
    return <>
        <div className={styles.item}>
            <div className={styles.leading}>
                <SaleIcon sale={sale} />
            </div>
            <div className={styles.content}>
                <span className={`admin-main-m ${styles.itemTitle}`}>
                    {sale.description}
                </span>
                {
                    sale.info ?
                    <>
                        <span className={`admin-main-r ${styles.itemInfo}`}>
                            {sale.info}
                        </span>
                        <span className={`app-small-r ${styles.itemSubtitle}`}>
                            {sale.value}
                        </span>
                    </> :
                    <span className={`admin-main-r ${styles.itemSubtitle}`}>
                        {sale.value}
                    </span>
                }
            </div>
            <div className={styles.trailing}>
                <Checkbox
                    checked={sale.enabled ?? true}
                    setChecked={(v: boolean)=>{
                        onChange({
                            ...sale,
                            enabled: v,
                        })
                    }}
                />
            </div>
        </div>
        {last ? <></> : <Divider />}
    </>
}

export default SalesListItem;
