import styles from './AuthFooter.module.scss'
import email from '../../assets/img/svg/email.svg'

const AuthFooter = () => {
  return (
    <footer className={styles.AuthFooter}>
        <a href='mailto:support@start.ru' className={styles.email}>
            <img src={email} alt="" />
            <span>support@start.ru</span>
        </a>
    </footer>
  )
}

export default AuthFooter