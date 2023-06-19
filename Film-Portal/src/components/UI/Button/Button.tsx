import cn from 'classnames';
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
    variant?: 'contained' | 'outlined' | "translucent";
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    onClick?: (...args: any[]) => void
}

const Button: FC<ButtonProps> = ({variant = 'contained', size= 'medium', children, onClick = () => null}) => {
    const mainCn = cn(
        styles.Button,
        styles[variant],
        styles[size]
    )

    return (
        <button className={mainCn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button