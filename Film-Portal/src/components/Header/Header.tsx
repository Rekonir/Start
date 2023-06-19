import Button from '../UI/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/img/svg/logo_white.svg'
import search from '../../assets/img/svg/search.svg'
import avatar from '../../assets/img/svg/avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import burger from '../../assets/img/svg/burger.svg'
import { useOutsideClick, useWindowScrollY, useWindowWidth } from '../../hooks/hooks'
import cn from 'classnames';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown'
import LanguageFlag from '../LanguageFlag/LanguageFlag'
import { useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import TranscriptionData from '../../TranscriptionData.json'
import { useTranslation } from 'react-i18next'


const Header = () => {

    const { t } = useTranslation()

    // const { RusLanguage } = useAppSelector(state => state.languageReducer)
    // const [language, setLanguage] = useState(TranscriptionData[0])
    // useEffect(() => {
    //     RusLanguage ? setLanguage(TranscriptionData[0]) : setLanguage(TranscriptionData[1])
    // }, [RusLanguage])

    const { isAuth } = useAppSelector( state => state.userReducer)

    //const isAuth = true

    const windowWidth = useWindowWidth()
    const scrollY = useWindowScrollY()

    const navigate = useNavigate()
    const signupHandler = () => navigate("/signup")
    const signinHandler = () => navigate("/signin")

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false))    

    useEffect(() => {
        console.log('auth',isAuth)
    }, [isAuth])

    return (
        <header className={cn(styles.Header, scrollY > 10 && styles.Header_small)}>
            <div className={styles.left}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt="START" />
                </Link>
                {windowWidth > 1024 && <nav>
                    {windowWidth >= 1120 && <div className={styles.link}>
                        <a href="https://start.ru/archive">{t('Header.TV_Movies')}</a>
                    </div>}
                    <div className={styles.link}>
                        <Link to="/movies">{t('Header.Movies')}</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="https://start.ru/series">{t('Header.Serials')}</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies/animation">{t('Header.Animation')}</Link>
                    </div>
                    <div className={styles.link}>
                        <Link to="/movies/comedy">{t('Header.Comedy')}</Link>
                    </div>
                    <div className={styles.link}>
                        <a href="https://start.ru/new">{t('Header.New')}</a>
                    </div>
                    {windowWidth >= 1200 && <div className={styles.link}>
                        <a href="https://start.ru/journal">{t('Header.Journal')}</a>
                    </div>}
                    <div className={styles.link}>
                        <a href="https://start.ru/tvchannels">{t('Header.TV')}</a>
                    </div>
                    <div className={styles.link}>
                        <Link to="/admin">{t('Header.Administration')}</Link>
                    </div>
                </nav>}
            </div>
            <div className={styles.right}>
                {windowWidth > 1024 && !isAuth && <Button size='small' onClick={signupHandler}>{t('Button.test_free')}</Button>}
                <div className={styles.icons}>
                    <div>
                        <img className={styles.icon} src={search} alt="search" />
                    </div>
                    {windowWidth > 1024 &&
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img className={styles.icon} src={avatar} alt="avatar" />
                    </div>}
                    {windowWidth <= 1024 &&
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img className={cn(styles.icon, styles.burger)} src={burger} alt="burger" />
                    </div>}

                </div>
                {isDropdownOpen &&
                    <HeaderDropdown loginHandler={signinHandler} onMouseLeave={() => setIsDropdownOpen(false)} />
                }
                {windowWidth > 1024 && <LanguageFlag />}
            </div>
        </header>
    )
}

export default Header