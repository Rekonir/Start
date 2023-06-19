import styles from './PlayButton.module.scss'
import play from '../../../assets/img/svg/play.svg'

const PlayButton = () => {
  return (
    <div className={styles.PlayButton}>
        <img src={play} alt="" />
    </div>
  )
}

export default PlayButton