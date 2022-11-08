import styles from "./Button.module.css"

type ButtonProps = {
    children: string;
    onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return <button
        className={styles.button}
        onClick={onClick}
    >
        <span className="admin-button-sb">{children}</span>
    </button>
}

export default Button;
