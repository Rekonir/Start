import { FC } from 'react';
import arrow from '../../../assets/img/svg/arrow.svg'
import styles from './SliderIndicators.module.scss'
import cn from 'classnames'

export interface SliderIndicatorsProps {
    goToPrev: () => void;
    goToNext: () => void;
    indicatorsNumber: number;
    activeIndicator: number
}

const SliderIndicators: FC<SliderIndicatorsProps> = ({goToPrev, goToNext, indicatorsNumber, activeIndicator}) => {
  return (
    <div className={styles.SliderIndicators}>
        <div className={styles.SliderIndicatorsWrapper}>
            <div className={cn(
                styles.arrow,
                styles.leftArrow
            )} onClick={goToPrev}>
                <img src={arrow} alt="<" />
            </div>

            <ul>
                { [...Array(indicatorsNumber)].map((item, index) => {
                    return(<li key={index}>
                        <div className={cn(
                            styles.indicator,
                            activeIndicator == index ? styles.indicatorActive : '')}>
                            <div className={styles.indicatorProgress}></div>
                        </div>
                    </li>)
                }) }
            </ul>

            <div className={cn(
                styles.arrow,
                styles.rightArrow
            )} onClick={goToNext}>
                <img src={arrow} alt=">" />
            </div>
        </div>
    </div>
  )
}

export default SliderIndicators