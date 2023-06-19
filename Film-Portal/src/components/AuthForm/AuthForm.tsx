import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './AuthForm.module.scss'
import google from '../../assets/img/svg/google_sign.svg'
import vk from '../../assets/img/svg/vk-1.svg'
import { Link } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from '../../types/types'
import { useAppSelector } from '../../hooks/redux'
import { logout } from '../../store/actions/userActions'

interface AuthFormProps {
    type: 'signin' | 'signup'
    title: string;
    btnName: string;
    bottomText: {
        left: string,
        right: string
    };
    submitHandler: (email: string, password: string) => void
}

const AuthForm: FC<AuthFormProps> = ({type, title, btnName, bottomText, submitHandler}) => {

    const { t } = useTranslation()

    const { isAuth, loading, error } = useAppSelector(state => state.userReducer)
    const [userError, setUserError] = useState<string | null>(null)

    const {
        control,
        handleSubmit,
        reset
    } = useForm<IAuth>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IAuth> = ({email, password}) => {
        submitHandler(email, password)
        reset()
        //setUserError(null)
        console.log('usEr', userError)
        // if (error) {
        //     logout()
        // }
    }

    useEffect(() => {
        if (error) {
            setUserError(
                error === 'User with this login does not exist' ? t('User with this login does not exist') :
                            error === 'User with this login already exists' ? t('User with this login already exists') :
                            t('error')
            )            
        } else {
            setUserError(null)
        }

      console.log(error, userError)
    }, [error])
    

  return (
    <div className={styles.AuthForm}>
        <h2 className={styles.title}>{title}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

            {/* <Input type="text" placeholder='Введите e-mail' style='light' innerRef={emailRegister.ref} name={emailRegister.name}
              onChange={emailRegister.onChange}
              onBlur={emailRegister.onBlur}
                // {...register('email', {
                //     required: 'Поле обязателено к заполнению'
                // })}
            /> */}

            <Controller
                    control={control}
                    rules={{
                        required: 'Поле обязателено к заполнению',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    }}
                    name="email"
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <Input type='text' placeholder='Введите e-mail' style='light'
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            isError={!!error || !!userError}
                        />
                        {error && <div className={styles.error}>{error.message}</div>}
                    </>
                    )}
                
            />

            {/* <div className={styles.error}>
                {errors?.email && <span>{errors?.email?.message}</span>}
            </div> */}

            {/* <div className={styles.passwordInput}>
            <Input type="password" placeholder='Введите пароль' style='light' innerRef={passwordRegister.ref} name={passwordRegister.name}
                          onChange={passwordRegister.onChange}
                          onBlur={passwordRegister.onBlur}
                // {...register('password', {
                //     // required: 'Поле обязателено к заполнению',
                //     minLength: {
                //         value: 6,
                //         message: 'Минимум 6 символов'
                //     }
                // })}
            /> 
            </div>*/}

            <div className={styles.passwordInput}>
                <Controller
                    control={control}
                    rules={{
                        required: 'Минимум 6 символов',
                        minLength: {
                        value: 6,
                        message: 'Минимум 6 символов'
                    }}}
                    name="password"
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <Input type="password" placeholder='Введите пароль' style='light'
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            isError={!!error  || !!userError}
                        />
                        {error && <div className={styles.error}>{error.message}</div>}
                        {userError && !error && <div className={styles.error}>{userError}</div>}
                    </>
                    )}
                />
            </div>

            {/* <div className={styles.error}>
                {errors?.email && <span>{errors?.password?.message}</span>}
            </div> */}

            {/* <div className={styles.passwordInput}>
            <input type="text" placeholder='Введите пароль'
                {...register('password1', {
                    required: 'Поле обязателено к заполнению',
                    minLength: {
                        value: 6,
                        message: 'Минимум 6 символов'
                    }
                })}
            />
            </div>
            <div className={styles.error}>
                {errors?.email && <span>{errors?.password?.message}</span>}
            </div> */}

            {/* <input type="text" placeholder='Введите e-mail'
              {...register('email', {
                     required: 'Поле обязателено к заполнению',
                    // minLength: {
                    //     value: 6,
                    //     message: 'Минимум 6 символов'
                    // }
                })}
            />

            <input type="password" placeholder='Введите пароль'
                {...register('password', {
                    // required: 'Поле обязателено к заполнению',
                    minLength: {
                        value: 6,
                        message: 'Минимум 6 символов'
                    }
                })}
            /> */}

{/* 
            <div className={styles.signBtn}>
                <Button onClick={() => submitHandler(email, password)}>{btnName}</Button>
            </div> */}

            
            <div className={styles.signBtn}>
                <Button >{btnName}</Button>
            </div>
        </form>

        <div className={styles.divide}>
            <div className={styles.line}></div>
            <div className={styles.divideTextWrap}>
                <div className={styles.divideText}>{t('Auth.or')}</div>
            </div>
        </div>
        <div className={styles.signButtons}>
            <div className={styles.signButton}>
                <img src={google} alt="" />
            </div>
            <div className={styles.signButton}>
                <img src={vk} alt="" />
            </div>
        </div>
        <div className={styles.signBottom}>
            <span>{bottomText.left}</span>
            {type === 'signin' && <Link to={"/signup"}>{bottomText.right}</Link>}
            {type === 'signup' && <Link to={"/signin"}>{bottomText.right}</Link>}
        </div>
    </div>
  )
}

export default AuthForm