import { FC, useEffect, useRef, useState } from 'react'
import styles from './Paginator.module.scss'
import { useWindowWidth } from '../../../hooks/hooks'

export interface PaginatorProps {
  sliderWidth: number,
  scroll: number
}

const Paginator: FC<PaginatorProps> = ({sliderWidth, scroll}) => {

  const paginatorRef = useRef<HTMLDivElement>(null)
  const paginatorItemRef = useRef<HTMLDivElement>(null)
  const paginatorWidth = paginatorRef.current ? paginatorRef.current.offsetWidth : 0
  const paginatorItemWidth = paginatorItemRef.current ? paginatorItemRef.current.offsetWidth : 0
  const [shift, setShift] = useState(0)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    setShift(scroll * (paginatorWidth - paginatorItemWidth) / (sliderWidth - windowWidth))
  }, [scroll])

  return (
    <div className={styles.Paginanor} ref={paginatorRef}>
      <div className={styles.paginatorItem} style={{transform: `translateX(${shift}px)`}} ref={paginatorItemRef}></div>
    </div>
  )
}

export default Paginator