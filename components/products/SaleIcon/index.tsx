import { Sale } from "../../../models"
import styles from "./SaleIcon.module.css"
import { TbDiscount2 } from "react-icons/tb"
import { SlPresent } from "react-icons/sl"
import { GrSync } from "react-icons/gr"

type SaleIconProps = {
    sale: Sale;
}

const SaleIcon = ({sale}: SaleIconProps) => {
    return <div className={[
        styles.wrapper,
        styles[sale.saleType]
    ].join(" ")}>
        {sale.saleType === "bundle" ?
            <SlPresent /> :
            sale.saleType === "tradeIn" ?
                <GrSync /> :
                <TbDiscount2 />}
    </div>
}

export default SaleIcon;
