import { FiCheck } from "react-icons/fi"
import React from "react"
import styles from "./Checkbox.module.css"

type CheckboxProps = {
    checked: boolean;
    setChecked: (v: boolean) => void;
}

const Checkbox = ({checked, setChecked}: CheckboxProps) => {
    return <label className={styles.label}>
        <input
            type="checkbox"
            checked={checked}
            className={styles.input}
            onChange={(e) => setChecked(e.target.checked)} />
        <div className={[styles.checkmark, checked ? styles.checked : ""].join(" ")}>
            {checked ?
                <FiCheck size={20} stroke={"var(--white)"} color={"var(--white)"} /> :
                <></>}
        </div>
    </label>
}

export default Checkbox;
