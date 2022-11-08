import styles from "./ProductGallery.module.css"
import React, { useState, useEffect, UIEvent } from "react"
import Image from "next/image"
import { useDebounce } from "../../../utils"

type ProductGalleryProps = {
    images: string[],
    width: number,
}

const ProductGallery = ({images, width}: ProductGalleryProps) => {
    const [position, setPosition] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const debouncedPosition = useDebounce(position, 0);

    useEffect(()=>{
        setIndex(Math.round(debouncedPosition/width))
    },[debouncedPosition, width])

    const onScroll = (event: UIEvent<HTMLDivElement>) => {
        setPosition((event.target as HTMLDivElement).scrollLeft)
    }

    return <div className={styles.wrapper}>
        <div className={styles.pager} onScroll={onScroll}>
            {images.map(
                (image, i) => <Image
                    key={i.toString()}
                    className={styles.image}
                    src={image}
                    alt={i.toString()}
                    height={271}
                    width={271}/>
            )}
        </div>
        <div className={styles.indicatorWrapper}>
            <div className={styles.indicator}>
                {images.map(
                    (e, i) => <div
                        key={i.toString()}
                        className={[
                            styles.indicatorDot,
                            i === index ?
                                styles.currentIndicator : ""
                        ].join(" ")}
                    />)
                }
            </div>
        </div>
    </div>
}

export default ProductGallery;
