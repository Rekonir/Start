import { FC } from 'react'
import styles from './StoriesCard.module.scss'

interface StoriesCardProps {
    imgSrc: string
}

const StoriesCard: FC<StoriesCardProps> = ({imgSrc}) => {
  return (
    <div className={styles.StoriesCard}>
        <img src={imgSrc} alt="" />
    </div>
  )
}

export default StoriesCard