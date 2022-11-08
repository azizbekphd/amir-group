import styles from "./Toggler.module.css"

type TogglerProps<T> = {
    items: {
        title: string,
        value: T,
        key: string | number,
    }[],
    selected: string | number,
    onChange: (value: T) => void,
}

const Toggler = <T,>({items, selected, onChange}: TogglerProps<T>) => {
    return <div className={styles.wrapper}>
        {items.map((item) => <div
            key={item.key}
            className={[
                styles.item,
                item.key === selected ? styles.selected : "",
            ].join(" ")}
            onClick={()=>{
                onChange(item.value)
            }}>
            {item.title}
        </div>)}
    </div>
}

export default Toggler;
