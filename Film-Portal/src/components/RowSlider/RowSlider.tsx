import { FC, ReactNode, useRef, useState, UIEvent, useEffect } from 'react'
import styles from './RowSlider.module.scss'
import Paginator from '../UI/Paginator/Paginator'
import arrow from '../../assets/img/svg/arrow.svg'
import cn from 'classnames'
import { useWindowWidth } from '../../hooks/hooks'

interface RowSliderProps {
    slides: ReactNode[],
    title: string
}

const RowSlider: FC<RowSliderProps> = ({ slides, title }) => {

    const windowWidth = useWindowWidth()
    const sliderWrapperRef = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)

    const slideRef = useRef<HTMLDivElement>(null)
    const [fadeWidth, setFadeWidth] = useState({
        left: 56,
        right: 56
    })

    const goToPrev = () => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.scrollLeft -= windowWidth * 0.9
        }
    }

    const goToNext = () => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.scrollLeft += windowWidth * 0.9
        }
    }

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        setScroll(e.currentTarget.scrollLeft)
        //console.log(scroll, sliderWidth - windowWidth - 15)
    }

    useEffect(() => {
        setSliderWidth(sliderWrapperRef.current ? sliderWrapperRef.current.scrollWidth : 0)

        if (sliderWrapperRef.current && slideRef.current) {
            setSliderWidth(sliderWrapperRef.current.scrollWidth)
            const slideWidth = +slideRef.current.offsetWidth

            setFadeWidth({ ...fadeWidth, right: (windowWidth - +sliderWrapperRef.current.style.paddingLeft) %
                (slideWidth + +sliderWrapperRef.current.style.gap)
            })
           // console.log(windowWidth, +sliderWrapperRef.current.style.paddingLeft, slideWidth, +sliderWrapperRef.current.style.gap,
             //   fadeWidth, sliderWrapperRef.current.style.paddingLeft)
             
        }
    }, [slideRef, sliderWidth, windowWidth])
    


    return (
        <div className={styles.RowSlider}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>

            <div className={styles.slide} style={{ width: windowWidth }}>

                <div className={styles.sliderWrapper} data-testid='slider-wrapper' ref={sliderWrapperRef} onScroll={handleScroll}>
                    {slides.map((slide, index) => <div className={styles.slideItem} key={index}>{slide}</div>)}
                </div>

                <div className={styles.paginator}>
                    <Paginator sliderWidth={sliderWidth} scroll={scroll} />
                </div>
                {scroll < sliderWidth - windowWidth - 15 &&
                <div className={cn(
                    styles.arrow,
                    styles.rightArrow
                )} onClick={goToNext} data-testid='right-arrow'>
                    <img src={arrow} alt=">" />
                </div>}
                
                {scroll > 10 &&
                <div className={cn(
                    styles.arrow,
                    styles.leftArrow
                )} onClick={goToPrev}>
                    <img src={arrow} alt="<" data-testid='left-arrow' />
                </div>}

                {scroll > 10 &&
                    <div className={cn(
                    styles.fade,
                    styles.fadeLeft
                )}></div>}

                {scroll < sliderWidth - windowWidth - 15 &&
                    <div className={cn(
                    styles.fade,
                    styles.fadeRight
                )}></div>}
            </div>
        </div>
    )
}

export default RowSlider