import { Link, useParams } from 'react-router-dom';
import Path from '../../components/UI/Path/Path';
import styles from './FilmPage.module.scss'
import FilmData from '../../FilmData.json'
import Button from '../../components/UI/Button/Button';
import { useEffect, useState } from 'react';
import CommentBox from '../../components/Comments/CommentBox';
import axios from 'axios';
import Film from '../../film.json'
import PersonList from '../../components/PersonList/PersonList';
import { useTranslation } from 'react-i18next';
import { IFilm } from '../../types/types';
import { fetchFilm } from '../../store/actions/filmActions';
import CommentBoxOld from '../../components/Comments/CommentBoxOld';
import { useAppSelector } from '../../hooks/redux';

const FilmPage = () => {

    const { t, i18n } = useTranslation()
    const RusLanguage = i18n.resolvedLanguage === 'ru'

    const { id } = useParams()
    const { user, isAuth } = useAppSelector(state => state.userReducer)

    //const film = FilmData.find((obj) => obj.id === Number(id))
    //const films: IFilm[] = Film
    //const film:IFilm = Film.find((obj) => obj.id === Number(id))||Film[0]
    ////////////
    // const url = ""
    // const filmPageAxios = (method: string = "GET", body: any = null) => {
    //     axios({
    //         method: method,
    //         url: url,
    //         data: body
    //     })
    //         .then(response => {
    //             let film: IFilm = response.data
    //             return film
    //         })
    //         .catch(error => (console.log(error)))
    // }
    //filmPageAxios()
    ///////////////


    const [film, setFilm] = useState<IFilm | null>(null)

    useEffect( () => {
        if ( id ) {
            fetchFilm( id, setFilm)
        }

        console.log("film", film, user)
    }, [])


    const [DescriptionState, getDescriptionState] = useState(false)
    const toggleDiscription = () => {
        getDescriptionState(!DescriptionState)
    }
    const formatTime = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const result = minutes + " мин. / " + (hours < 10 ? "0" : "") + hours + ":" + (mins < 10 ? "0" : "") + mins;
        return result;
    }
    return (
        <div className={styles.page}>
            <div className={styles.baner}>
                <div className={styles.banerBox}>
                    <img className={styles.imgBaner} src={`http://localhost:4998/${film?.poster}`} alt="" data-testid='Baner' />
                </div>
                <div className={styles.topBlock}>
                    <Path>
                        <Link to="/"> {t('Path.main')} </Link>
                        <Link to="/movies">{t('Path.main')}</Link>
                        <Link to={`/movies/:${film?.genres[0].name_en}`}>{RusLanguage ? film?.genres[0].name_ru : film?.genres[0].name_en}</Link>
                        <Link to="/movie/:id">{RusLanguage ? film?.name_ru : film?.name_en}</Link>
                    </Path>
                    <div className={styles.filmInfo}>
                        <h1 className={styles.filmName} data-testid='Name'>{RusLanguage ? film?.name_ru : film?.name_en}</h1>
                        <div className={styles.descriptionShort} data-testid='info'>
                            <span className={Number(film?.rating) >= 7 ? styles.ratingTop : styles.rating}> {Number(film?.rating).toFixed(1)},</span>
                            {/* <span className={styles.link}>{new Date(film?.world_premier).getFullYear()},</span> */}
                            {film?.genres.map(genre => (
                                <span className={styles.link} key={genre.name_en}>{RusLanguage ? genre.name_ru : genre.name_en},</span>
                            ))}
                            {/* <span className={styles.link}>{film?.age}, {formatTime(film?.duration_min)} </span> */}
                        </div>
                        <div className={styles.description} data-testid='shortDescription'>
                            <p>{film?.tagline} </p>
                        </div>
                        <div className={styles.btnBox}>
                            <Button size='large' data-testid='watch_free'>
                                <img src="https://start.ru/static/images/movie/play.svg" />
                                {t('Button.watch_free')}
                            </Button>
                            <Button variant="outlined" size='large' data-testid='watch_tr'>
                                <img src="https://start.ru/static/images/product/kino.svg" />
                                {t('Button.watch_tr')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.FilmBotInfo}>
                <h1 className={styles.header}> {t('movie')} {film?.name_ru} {t('watch_online')} </h1>
                <div className={styles.trailerBox} data-testid='trailer'>
                    <iframe className={styles.trailer} src="https://www.youtube.com/embed/otmeAaifX04" title="YouTube trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                </div>
                <div className={styles.descriptionWrapper} data-testid='description'>
                    <div className={DescriptionState ? styles.descriptionFull : styles.descriptionFullSlash}>
                        <p>{film?.description} <br></br></p>
                    </div>
                    <div className={styles.socialBox} data-testid='socialBox'>
                        <div className={styles.box}>
                            <Button variant='outlined'>
                                <img src="https://start.ru/static/images/product/like.svg" alt="" />
                            </Button>
                            <Button variant='outlined'>
                                <img src="https://start.ru/static/images/product/dislike.svg" alt="" />
                            </Button>
                        </div>
                        <div className={styles.box}>
                            {t('share')}:
                            <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#45668e"></circle><path d="M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z" fill="white"></path></svg>
                            <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#f2720c"></circle><path d="M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z " fill="white"></path></svg>
                            <img src="https://start.ru/static/images/product/tg.svg" alt="tg"></img>
                        </div>
                    </div>
                </div>
                <div className={styles.toggleDescription} style={DescriptionState ? { display: 'none' } : { display: 'flex' }} onClick={toggleDiscription}>
                    <div className={styles.more} data-testid='more'> {t('FilmPage.more')}</div>
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </div>
                <div className={styles.toggleDescription} style={DescriptionState ? { display: 'flex' } : { display: 'none' }} onClick={toggleDiscription}>
                    <div className={styles.more} data-testid='hide'> {t('FilmPage.hide')}</div>
                    <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                </div>

                <h2 className={styles.subheader}>{t('FilmPage.persons')}</h2>
                <div className={styles.persons}>
                    {film?.persons.actors && film?.persons.actors.length > 0 && <PersonList position={film?.persons.actors} nameProfessions={t('FilmPage.actor')} />}
                    {film?.persons.composers && film?.persons.composers.length > 0 && <PersonList position={film?.persons.composers} nameProfessions={t('FilmPage.composers')} />}
                    {film?.persons.designers && film?.persons.designers.length > 0 && <PersonList position={film?.persons.designers} nameProfessions={t('FilmPage.designers')} />}
                    {film?.persons.directors && film?.persons.directors.length > 0 && <PersonList position={film?.persons.directors} nameProfessions={t('FilmPage.directors')} />}
                    {film?.persons.editors && film?.persons.editors.length > 0 && <PersonList position={film?.persons.editors} nameProfessions={t('FilmPage.editors')} />}
                    {film?.persons.operators && film?.persons.operators.length > 0 && <PersonList position={film?.persons.operators} nameProfessions={t('FilmPage.operators')} />}
                    {film?.persons.producer && film?.persons.producer.length > 0 && <PersonList position={film?.persons.producer} nameProfessions={t('FilmPage.producer')} />}
                    {film?.persons.translators && film?.persons.translators.length > 0 && <PersonList position={film?.persons.translators} nameProfessions={t('FilmPage.translators')} />}
                    {film?.persons.voiceDirectors && film?.persons.voiceDirectors.length > 0 && <PersonList position={film?.persons.voiceDirectors} nameProfessions={t('FilmPage.voiceDirectors')} />}
                    {film?.persons.voices && film?.persons.voices.length > 0 && <PersonList position={film?.persons.voices} nameProfessions={t('FilmPage.voices')} />}
                    {film?.persons.writers && film?.persons.writers.length > 0 && <PersonList position={film?.persons.writers} nameProfessions={t('FilmPage.writers')} />}
                </div>
            </div>
            {film?.comments &&
                <CommentBox filmComments={film?.comments} />
            }
            
            {/* <CommentBoxOld /> */}
        </div >
    );
};

export default FilmPage;