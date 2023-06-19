import { FC, useEffect, useRef, useState } from 'react'
import styles from './Selector.module.scss'
import { genre } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';

export interface SelectorProps {
    name: string,
    array: any[],
    filter: 'none' | 'genre' | 'year' | 'country',
    func?: (...args: any[]) => void,
    defValue?: any
}

const Selector: FC<SelectorProps> = ({ name, array, filter = 'none', func, defValue }) => {

    const [genreBoxState, setGenreBox] = useState(false);
    const toggleShowBox = () => setGenreBox(!genreBoxState);
    const blockRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (blockRef.current?.contains(e.target as Node)) {
            return;
        }
        setGenreBox(false);
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, []);

    const [genreFilterArray, setFilterArray] = useState<string>('');
    // const addFilterPosition = (filter: genre, isChecked: boolean) => {
    //     const updatedFilter = isChecked ? [...genreFilterArray, filter.name_en] : genreFilterArray.filter((item) => item !== filter.name_en);
    //     setFilterArray(updatedFilter);
    // }

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        setFilterArray(e.target.value)
        setValue(e.target.value)
    }

    const navigate = useNavigate()
    const createURL = (genre: string[] = []) => {
        let url = ''
        genre.forEach(function (elem: string, idx: number) {
            if (idx === genre.length - 1) {
                url = url + elem
            } else {
                url = url + elem + '+'
            }
        })
        return url
    }
    const goFilterUrl = (URL: string) => {
        let link = ''
        if (window.location.pathname.includes('/movies')) {
            link = '/movies/'
        }
        else {
            link = '/admin/'
        }
        link += URL
        navigate(link, { replace: true })
    }

    useEffect(() => {
        goFilterUrl(genreFilterArray)
    }, [genreFilterArray])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (func) {
            func(e.target.value)
        }
        console.log('han', e.target.value)
        setValue(e.target.value)
    }
    const { i18n } = useTranslation()
    const RusLanguage = i18n.resolvedLanguage === 'ru'
    const [value, setValue] = useState(defValue)
    useEffect(() => {
        setValue(defValue)
    }, [defValue])
    switch (filter) {
        // case 'genres': return (
        //     <div className={styles.filter}  >
        //         <div className={styles.wraper}>
        //             <div className={styles.selector} data-testid='genre' onClick={toggleShowBox} id={name}> {name}</div>
        //             {genreBoxState && (
        //                 <div className={styles.filterBox} data-testid="genresBox" ref={blockRef}>
        //                     {array.map(filter => (
        //                         <Checkbox position={filter} func={addFilterPosition} key={filter} data-testid='checkbox' />
        //                     ))
        //                     }
        //                 </div >)}
        //         </div>
        //     </div>
        // );
        case 'genre': return (
            <div className={styles.wraper}>
                <select className={styles.selector} id={name} value={value} onChange={handleChange}>
                    <option className={styles.option} value='' disabled defaultValue={value}>{name}</option>
                    {array.map(option => (
                        <option className={styles.option} value={option.name_en} key={option.name_en}>{RusLanguage ? option.name_ru : option.name_en}</option>
                    ))}
                </select>
            </div>
        )        
        case 'country': return (
            <div className={styles.wraper}>
                <select className={styles.selector} id={name} value={value} onChange={handleChange}>
                    <option className={styles.option} value='' disabled defaultValue={value}>{name}</option>
                    {array.map(option => (
                        <option className={styles.option} value={option.name_ru} key={option.name_en}>{RusLanguage ? option.name_ru : option.name_en}</option>
                    ))}
                </select>
            </div>
        )
        default: return (
            <div className={styles.wraper}>
                <select className={styles.selector} id={name}  onChange={handleChange} value={value}>
                    <option className={styles.option} disabled defaultValue={value} value={0}>{name}</option>
                    {array.map(option => (
                        <option className={styles.option} value={option} key={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Selector
