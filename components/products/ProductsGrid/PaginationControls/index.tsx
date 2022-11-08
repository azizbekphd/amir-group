import styles from "./PaginationControls.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Link from "next/link"
import { useMemo } from "react"

type PaginationControlsProps = {
    currentPage: number;
    pages: number;
    onChange: (page: number) => void;
}

const PaginationControls = (
    {currentPage, pages, onChange}: PaginationControlsProps) => {
        const url = "/orders/checkout/?page="

        const numbers = useMemo<number[]>(()=>{
            const p = currentPage;
            const l = pages;
            if(pages <= 7) {
                return [1,2,3,4,5,6,7]
            } else if (p <= 4) {
                return [1,2,3,4,5,NaN,l]
            } else if (pages-p <= 4) {
                return [1,NaN,l-5,l-4,l-3,l-2,l-1,l]
            } else 
                return [1, NaN, p-1, p, p+1, NaN, l]
        },[currentPage, pages])

        return <div className={styles.wrapper}>
            <Link
                className={styles.arrow}
                href={`${url}${Math.max(currentPage-1,1)}`}
            >
                <IoIosArrowBack size={30} />
            </Link>
            <div className={styles.numbers}>
                {numbers.map(n => isNaN(n) ?
                    <div className={styles.ellipsis}>...</div> :
                    n === currentPage ?
                        <div className={styles.current}>{n}</div>:
                        <Link href={`${url}${n}`}>{n}</Link>)}
            </div>
            <Link
                className={styles.arrow}
                href={`${url}${Math.min(currentPage+1, pages)}`}
            >
                <IoIosArrowForward size={30} />
            </Link>
        </div>
}

export default PaginationControls;
