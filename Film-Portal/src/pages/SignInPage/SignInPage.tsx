import styles from './SignInPage.module.scss'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { login } from '../../store/actions/userActions'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { redirect } from 'react-router-dom'

const SignInPage = () => {

    const { t } = useTranslation()

    const { isAuth } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //   if (isAuth) {
    //     redirect('/')
    //   }
    // }, [isAuth])

    const signinHandler = (email: string, password: string) => {
        console.log(email, password)
        dispatch( login(email, password) )
    }
  
  return (
    <div className={styles.SignInPage}>
      <AuthForm type='signin'
        title={t('sign_in_account')}
        btnName={t('sign_in')}
        bottomText={{
            left: `${t('no_account?')} `,
            right: t('try_for_free')
        }}
        submitHandler={signinHandler} />
  </div>
  )
}

export default SignInPage