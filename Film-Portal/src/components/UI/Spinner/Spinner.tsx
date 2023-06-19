import spinner from '../../../assets/img/svg/spinner.svg'
import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
        <img src={spinner} alt="" />
    </div>
  )
}

export default Spinner