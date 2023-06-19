import { FC, useEffect, useState } from 'react';
import styles from './Slider.module.scss'

export interface SliderProps {
    name: string
    max: number
    func?: any
    value: number
}
const Slider: FC<SliderProps> = ({ name, max, func, value }) => {

    const [valueSlider, setValueSlider] = useState(value)
    useEffect(()=>{
        setValueSlider(value)
    },[value])
    useEffect(() => {
        if (func) {
            func(valueSlider)
        }
    }, [valueSlider])

    return (
        <div className={styles.sliderBox}>
            <output className={styles.output}  id="volume"> {name} {valueSlider}</output>
            <input type="range" className={styles.slider} value={valueSlider} defaultValue={valueSlider}
            onChange={(e) => { setValueSlider(+e.target.value) }} min='0' max={String(max)} step={max / 100} />
        </div>
    );
};

export default Slider;