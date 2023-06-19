import styles from './HeaderDropdown.module.scss'
import login from '../../assets/img/svg/login-new.svg'
import languageIcon from '../../assets/img/svg/language-new.svg'
import supportIcon from '../../assets/img/svg/support-new.svg'
import avatar from '../../assets/img/svg/avatar.svg'
import cn from 'classnames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { logout } from '../../store/actions/userActions'
import { useWindowWidth } from '../../hooks/hooks'
import Button from '../UI/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import LanguageFlag from '../LanguageFlag/LanguageFlag'

interface HeaderDropdownProps {
    loginHandler: () => void;
    onMouseLeave: () => void
}

const HeaderDropdown: FC<HeaderDropdownProps> = ({loginHandler, onMouseLeave}) => {

    const { t } = useTranslation()

    const windowWidth = useWindowWidth()

    const { isAuth } = useAppSelector( state => state.userReducer)
    const { isAdmin } = useAppSelector( state => state.userReducer.user)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch( logout() )
        console.log('logout', isAuth)
    }

    const navigate = useNavigate()
    const signupHandler = () => navigate("/signup")

    //const isAuth = true

  return (
    <div data-testid='HeaderDropdown'className={styles.Dropdown}  onMouseLeave={onMouseLeave}>
        <div className={styles.triangle}></div>
        <div className={styles.dropdownWrapper}>

            {windowWidth <= 1024 &&
                <Link to="/movies" className={styles.dropdownBlock}>
                    <div>
                        <img src={avatar} alt="" />
                    </div>
                    <span>{t('Header.Movies')}</span>
                </Link>
            }

            <div className={styles.dropdownBlock}>
                <div className={styles.languageFlag}>
                    {/* <img src={languageIcon} alt="" /> */}
                    <LanguageFlag />
                </div>
                <span>{t('Header.change_language')}</span>
            </div>

            <a href="https://start.ru/support" className={styles.dropdownBlock}>
                    <div>
                        <img src={supportIcon} alt="support" />
                    </div>
                    <span>{t('Header.support_center')}</span>
            </a>

            {windowWidth <= 1024 && !isAuth &&
            <div className={styles.testFreeBtn}>
                <Button size='small' onClick={signupHandler}>{t('Button.test_free')}</Button>
            </div>}

            {!isAuth &&
                <div data-testid='Login' className={cn(styles.dropdownBlock, styles.authBlock)} onClick={loginHandler}>
                    <div className={styles.authText}>{t('have_an_account?')}</div>
                    <div className={styles.loginBtn}>
                        {t('sign_in')}
                        <img src={login} alt="" />
                    </div>
                </div>
            }

            {isAuth &&
                <div data-testid='Login' className={cn(styles.dropdownBlock, styles.authBlock)} onClick={logoutHandler}>
                    <div className={styles.authText}></div>
                    <div className={styles.loginBtn}>
                        {t('sign_out')}
                        <img src={login} alt="" />
                    </div>
                </div>
            }

        </div>
    </div>
  )
}

export default HeaderDropdown