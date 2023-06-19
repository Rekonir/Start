import { FC, useEffect, useLayoutEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import FilmData from '../../FilmData.json';
import Film from '../../film.json';
import FilmsList from '../../components/FilmsList/FilmsList';
import Selector from '../UI/Selector/Selector';
import Button from '../../components/UI/Button/Button';
import YearData from '../../YearData.json'
import Slider from '../../components/UI/Slider/Slider';
import GenresData from '../../GenresData.json'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import CountyData from '../CountryData.json'
import { IFilm, IFilter } from '../../types/types';
import { useTranslation } from 'react-i18next';
import { fetchFilms, fetchFilteredFilms } from '../../store/actions/filmActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface CatalogProps {
    genres: string[]
}


const Catalog: FC<CatalogProps> = ({ genres }) => {

    const { t } = useTranslation()



    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState({} as IFilter)
    const { films, loading, error } = useAppSelector(state => state.filmReducer)
    const [film, setFilm] = useState<IFilm[]>(films);
    const [sortState, setSort] = useState('none');
    const [yearFilter, setYearFilter] = useState<number>(0)
    const [ratingFilter, setRatingFilter] = useState<number>(0)
    const [marksFilter, setMarksFilter] = useState<number>(0)
    const [countryFilter, setCountryFilter] = useState<string>("")
    const [actrosFilter, setActrosFilter] = useState<string>("")
    const [directorFilter, setDirectorFilter] = useState<string>("")
    const [pageIndex, setPageIndex] = useState<number>(0)

    const clearFilter = () => {
        setYearFilter(0),
            setRatingFilter(0),
            setMarksFilter(0),
            setCountryFilter(""),
            setActrosFilter(""),
            setDirectorFilter(""),
            setPageIndex(0)
            setFilterArray('')
    }

    useEffect(() => {
        setFilter({
            pageIndex: +pageIndex,
            year: +yearFilter,
            rating: +ratingFilter,
            marks: +marksFilter,
            country: countryFilter,
            actors: actrosFilter,
            directors: directorFilter,
        })
        console.log('Filter Obj', filter)
    }, [yearFilter, genres, ratingFilter, marksFilter, countryFilter, actrosFilter, directorFilter, pageIndex])


    const [genreFilterArray, setFilterArray] = useState<string>('');
    // const addFilterPosition = (filter: genre, isChecked: boolean) => {
    //     const updatedFilter = isChecked ? [...genreFilterArray, filter.name_en] : genreFilterArray.filter((item) => item !== filter.name_en);
    //     setFilterArray(updatedFilter);
    // }


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
    

    useEffect(() => {
        dispatch(fetchFilteredFilms(filter, setFilm, genreFilterArray))
        //setFilm(films)
        console.log("film", films)

        console.log("state", film)
    }, [filter, genreFilterArray])



    useEffect(() => {

        switch (sortState) {
            case 'По рейтингу' || 'By popularity':
                setFilm(prev => [...prev].sort((a, b) => b.rating - a.rating));
                break;
            case 'По дате выхода (сначала свежие)' || 'Newest':
                setFilm(prev => [...prev].sort((a, b) => new Date(b.world_premier).getFullYear() - new Date(a.world_premier).getFullYear()));
                break;
            case 'По дате выхода (сначала старые)' || 'Oldest':
                setFilm(prev => [...prev].sort((a, b) => new Date(a.world_premier).getFullYear() - new Date(b.world_premier).getFullYear()));
                break;
            case 'По алфавиту (А-Я)' || 'Alphabetically (A-Z)':
                setFilm(prev => [...prev].sort((a, b) => a.name_ru.localeCompare(b.name_ru)));
                break;
            case 'По алфавиту (Я-А)' || 'Alphabetically (Z-A)':
                setFilm(prev => [...prev].sort((a, b) => b.name_ru.localeCompare(a.name_ru)));
                break;
            default:
                setFilm(film);
                break;
        }
    }, [sortState]);

    return (
        <>
            <div className={styles.filtersBox}>
                <Selector defValue={''} func={setFilterArray} name={t('genre')}  array={GenresData} filter={'genre'} />
                <Selector defValue={yearFilter} func={setYearFilter} name={t('year')} array={YearData} filter={'year'} />
                <Selector defValue={countryFilter}  func={setCountryFilter} name={t('countries')} array={CountyData} filter='country' />
                <Slider value={ratingFilter} func={setRatingFilter} max={10} name={t('rating_from')} />
                <Slider value={marksFilter} func={setMarksFilter} max={1000000} name={t('number_of_ratings_from')} />
                <Input type='text' placeholder={t('search_by_actors')} onChange={(e) => setActrosFilter(e.target.value)} style='dark' />
                <Input type='text' placeholder={t('search_by_director')} onChange={(e) => setDirectorFilter(e.target.value)} style='dark' />
                <Selector name={t('sort')} filter='none' func={setSort}
                    array={[t('by_the_number_of_ratings'), t('by_popularity'), t('newest'), t('oldest'), t('alphabetically_(A-Z)'), t('alphabetically_(Z-A)')]} />
                <Link to='/movies/' onClick={clearFilter}>
                    <Button variant='translucent' >{t('Button.clean')}</Button>
                </Link >
            </div >
            <FilmsList films={film}></FilmsList>
            <div className={styles.pagination}>
                <div onClick={() => setPageIndex(prev => prev === 0 ? 0 : prev - 1)}>
                    <Button variant='outlined'>
                        {t('Button.back')}
                    </Button>
                </div>
                <div onClick={() => setPageIndex(prev => prev + 1)}>
                    <Button variant='outlined'>
                        {t('Button.next')}
                    </Button>
                </div>
            </div>


        </>

    );
};

export default Catalog;