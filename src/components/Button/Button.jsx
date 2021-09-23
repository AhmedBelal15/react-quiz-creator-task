import styles from './button.module.css'

const Button = ({width, height, children, ...props}) => {
    return <button style={{width, height}} className={styles['button']}>{children}</button>
}

export default Button;