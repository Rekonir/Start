import styles from './LanguageFlag.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeLanguage } from '../../store/actions/languageActions'
import { useTranslation } from 'react-i18next';
import enImg from '../../assets/img/en.png'
import ruImg from '../../assets/img/ru.png'


const LanguageFlag = () => {
    const { RusLanguage } = useAppSelector(state => state.languageReducer)
    const dispatch = useAppDispatch()

    const change = () => {
        dispatch(changeLanguage())
        console.log(RusLanguage)
    }

    const { i18n } = useTranslation()

    const changeLng = (lng: 'ru' | 'en') => {
        i18n.changeLanguage(lng)
        console.log(i18n.resolvedLanguage)
    }
    

    return (
        <div className={styles.flagBox}>
            {/* <img data-testid='Language flag'
            src={RusLanguage ? "https://cdn-icons-png.flaticon.com/512/3054/3054051.png" : "https://cdn-icons-png.flaticon.com/512/4009/4009124.png"}
            alt="" className={styles.Flag}
            onClick={change} /> */}

            {i18n.resolvedLanguage === 'ru' && 
                <img data-testid='Language flag'
                src={ruImg} alt="ru"
                className={styles.Flag}
                onClick={() => changeLng('en')} />
            }
            {i18n.resolvedLanguage === 'en' && 
                <img data-testid='Language flag'
                src={enImg} alt="en"
                className={styles.Flag}
                onClick={() => changeLng('ru')} />
            }

            {/* <img data-testid='Language flag'
            src={i18n.resolvedLanguage === 'ru' ? ruImg : enImg} alt={i18n.resolvedLanguage}
            className={styles.Flag}
            onClick={() => changeLng()} /> */}
        </div>
    );
};

export default LanguageFlag;