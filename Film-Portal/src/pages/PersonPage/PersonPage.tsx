import PersonData from '../../PeopleData.json'
import FilmData from '../../FilmData.json'
import FilmsList from '../../components/FilmsList/FilmsList'
import styles from './PersonPage.module.scss'
import Path from '../../components/UI/Path/Path'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPerson } from '../../store/actions/personActions'
import { IPerson, IPersonsFilms } from '../../types/types'
import Person from '../../person.json'
import { useTranslation } from 'react-i18next'


const PersonPage = () => {

    const { t, i18n } = useTranslation()

    const RusLanguage = i18n.resolvedLanguage === 'ru'
    
    const { id } = useParams()
    const [person, setPerson] = useState<IPerson | null>(null)
    const [films, setFilms] = useState<IPersonsFilms | null>(null)

    useEffect(() => {
        if (id) {
            fetchPerson(id, setPerson)
            // const filmsSet = new Set(
            //     person?.actor
            //     .concat(person?.composer)
            //     .concat(person?.designer)
            //     person?.voice,
            //     person?.voiceDirector)
            // setFilms()
        }
    }, [])

    const dateOfBirth = `${person?.birthday?.slice(8, 10)}.${person?.birthday?.slice(5, 7)}.${person?.birthday?.slice(0, 4)}`


    return (
        <div className={styles.PersonPage}>
            <Path>
                <p> {t('Path.main')} </p>
                <Link to="/persons">{t('Path.persons')}</Link>
            </Path>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.personPhoto}>
                        <img src={`http://localhost:4998/${person?.poster}`} alt="" data-testid='avatarPerson' />
                    </div>
                </div>
                <div className={styles.right_wrapper}>

                    <h3 data-testid='fullName'>{RusLanguage ? person?.name_ru : person?.name_en}</h3>
                    {person?.birthday &&
                        <p className={styles.description} data-testid='biography'>{t('PersonPage.birthday')}{dateOfBirth || "-"}</p>
                    }
                    {person?.place_of_birth &&
                        <p className={styles.description} data-testid='biography'>{t('PersonPage.place_of_birth')}{person?.place_of_birth || "-"} </p>
                    }

                </div>
            </div>
            <div className={styles.bottom}>
                <h1 data-testid='filmgraphy'>{RusLanguage ? person?.name_ru : person?.name_en}: {t('PersonPage.films')}</h1>
                {person?.actor && person?.actor.length > 0 &&
                    <>
                        <p className={styles.description}>{t('PersonPage.actor')}</p>
                        <FilmsList films={person?.actor} ></FilmsList>
                    </>
                }
                {person?.composer && person?.composer.length > 0 &&
                                        <>
                        <p className={styles.description}>{t('PersonPage.composer')}</p>
                        <FilmsList films={person?.composer} ></FilmsList>
                    </>
                }
                {person?.designer && person?.designer.length > 0 &&
                    <>
                        <p className={styles.description}>{t('PersonPage.designer')}</p>
                        <FilmsList films={person?.designer} ></FilmsList>
                    </>
                }
                {person?.director && person?.director.length > 0 &&
                            <>
                            <p className={styles.description}>{t('PersonPage.director')}</p>
                            <FilmsList films={person?.director} ></FilmsList>
                        </>
                }
                {person?.editor && person?.editor.length > 0 &&
                        <>
                        <p className={styles.description}>{t('PersonPage.editor')}</p>
                        <FilmsList films={person?.editor} ></FilmsList>
                    </>
                }
                {person?.operator && person?.operator.length > 0 &&
                        <>
                        <p className={styles.description}>{t('PersonPage.operator')}</p>
                        <FilmsList films={person?.operator} ></FilmsList>
                    </>
                }
                {person?.producer && person?.producer.length > 0 &&
                        <>
                        <p className={styles.description}>{t('PersonPage.producer')}</p>
                        <FilmsList films={person?.producer} ></FilmsList>
                    </>
                }
                {person?.voice && person?.voice.length > 0 &&
                    <>
                        <p className={styles.description}>{t('PersonPage.voice')}</p>
                        <FilmsList films={person?.voice} ></FilmsList>
                    </>
                }
                {person?.voiceDirector && person?.voiceDirector.length > 0 &&
                    <>
                        <p className={styles.description}>{t('PersonPage.voiceDirector')}</p>
                        <FilmsList films={person?.voiceDirector} ></FilmsList>
                    </>
                }
                {person?.writer && person?.writer.length > 0 &&
                    <>
                        <p className={styles.description}>{t('PersonPage.writer')}</p>
                        <FilmsList films={person?.writer} ></FilmsList>
                    </>
                }
            </div>
        </div>
    )
}

export default PersonPage