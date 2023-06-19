import { FC, useEffect, useState } from "react"
import BannerSlide from "./BannerSlide"
import { IFilm, IPersonsFilms } from "../../types/types"
import SliderIndicators from "../UI/SliderIndicators/SliderIndicators"
import styles from './BannerSlider.module.scss'
import Spinner from "../UI/Spinner/Spinner"
import { useWindowWidth } from "../../hooks/hooks"


interface BannerSliderProps {
    slides: IPersonsFilms[]
}

const BannerSlider: FC<BannerSliderProps> = ({slides}) => {

    const autoplayDelay = 17500
    const [currentIndex, setCurrentIndex] = useState(0)
    const [offset, setOffset] = useState(0)

    const windowWidth = useWindowWidth()
    const sliderWidth = windowWidth * slides.length    

    const goToPrev = () => {
        const newIndex = currentIndex == 0 ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

        // const newOffset = offset == 0 ? sliderWidth - windowWidth : offset - windowWidth
        // setOffset(newOffset)
    }

    const goToNext = () => {
        const newIndex = currentIndex == slides.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)

        // const newOffset = offset == sliderWidth - windowWidth ? 0 : offset + windowWidth
        // setOffset(newOffset)
    }

    useEffect(() => {
        const newOffset = currentIndex * windowWidth

        setOffset(newOffset)
    }, [windowWidth, currentIndex])

    useEffect(() => {    
        const interval = setInterval(() => goToNext(), autoplayDelay)

        return () => clearInterval(interval)
    }, [currentIndex])

  return (
    <div className={styles.BannerSlider} >
        <div className={styles.slide} style={{width: windowWidth}}>
            <div className={styles.slidesWrapper} style={{transform: `translateX(${-offset}px)`}}>
                {slides.map((slide, index) => {
                    return(
                        <BannerSlide key={index} film={slide}></BannerSlide>
                    )
                })}
            </div>
        </div>

        <div className={styles.indicatorsWrap}>
            <SliderIndicators goToPrev={goToPrev}
                goToNext={goToNext}
                indicatorsNumber={slides.length}
                activeIndicator={currentIndex}
            ></SliderIndicators>
        </div>
    </div>
  )
}

export default BannerSlider