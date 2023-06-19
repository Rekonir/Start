import { FC } from 'react'
import PlayButton from '../UI/PlayButton/PlayButton'
import styles from './Top10Card.module.scss'
import { Link } from 'react-router-dom'

interface Top10CardProps {
    topNumber: number
    imgLink: string | undefined
    filmLink: string
}

const Top10Card: FC<Top10CardProps> = ({topNumber, imgLink, filmLink}) => {
  return (
    <div className={styles.Top10Card}>
        <Link to={filmLink}>

            <div className={styles.content} style={{backgroundImage: `url(${'"http://localhost:4998/' + imgLink +'"'})`}}>
                <div className={styles.playBtn}>
                    <PlayButton />
                </div>
            </div>

            <div className={styles.numberWrap}>
                <div className={styles.number}>
                    <img src={`https://start.ru/static/images/newVideoUnit/topTen/${topNumber}.svg`} alt={topNumber.toString()} />
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Top10Card