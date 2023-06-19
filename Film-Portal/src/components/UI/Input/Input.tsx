import { FC, useState } from 'react';
import styles from './Input.module.scss'
import eyeOn from '../../../assets/img/svg/eye-on.svg'
import eyeOff from '../../../assets/img/svg/eye-off.svg'
import cn from 'classnames'

export interface InputProps {
    type: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    value?: string | number;
    style?: 'light' | 'dark';
    isError?: boolean;
}

const Input: FC<InputProps> = ({type, placeholder, onChange, onBlur, value, style = 'dark', isError}) => {

    const [showPassword, setShowPassword] = useState(false)

    const eyeClickHandler = () => {
        setShowPassword(!showPassword)
    }
    
  return (
    <div className={cn(styles.Input, styles[style], isError ? styles.error : '')}>
        {type !== 'password' &&
            <input
                type={type} placeholder={placeholder} data-testid='inputBox'
                value={value}
                onChange={onChange} onBlur={onBlur}
            />
        }
        {type === 'password' &&
            <>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder} onChange={onChange}
                    onBlur={onBlur} value={value}
                />
                <div className={styles.passwordEye} onClick={eyeClickHandler}>
                    {showPassword ? <img src={eyeOff} alt="" /> : <img src={eyeOn} alt="" />}
                </div>
            </>
        }
    </div>
  )
}

export default Input