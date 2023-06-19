import { Link, useParams } from 'react-router-dom';
import Catalog from '../../components/Catalog/Catalog';
import styles from './AdminPage.module.scss';
import Path from '../../components/UI/Path/Path';
import GenresData from '../../GenresData.json'
import FilmData from '../../FilmData.json'
import PeopleData from '../../PeopleData.json'
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import ProfessionsData from '../../ProfessionsData.json'
import Button from '../../components/UI/Button/Button';
import { useEffect, useState } from 'react';
import PersonColumn from '../../components/PersonColumn/PersonColumn';
import Input from '../../components/UI/Input/Input';
import { useTranslation } from 'react-i18next';


const AdminPage = () => {
    const { genre } = useParams()
    const genres = genre?.split('+') || ['']
    const [newFilmImg, setNewFilmImg] = useState('')
    const [newFilmYear, setNewFilmYear] = useState(0)
    const [newFilmCountry, setNewFilmCountry] = useState([''])
    const [newFilmTagline, setNewFilmTagline] = useState('')
    const [newFilmAge, setNewFilmAge] = useState(0)
    const [newFilmTime, setNewFilmTime] = useState(0)
    const [newFilmRating, setNewFilmRating] = useState(0.0)
    const [newFilmMarks, setNewFilmMarks] = useState(0)
    const [newFilmName_ru, setNewFilmName_ru] = useState('')
    const [newFilmName_en, setNewFilmName_en] = useState('')
    const [newFilmDescription, setNewFilmDescription] = useState('')
    const [newFilmGenres, setNewFilmGenres] = useState<string[]>([])
    const [personName, setPersonName] = useState('')
    const [personProf, setPersonProf] = useState<string[]>([])
    const [personImg, setPersonImg] = useState('')


    const formatTime = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const result = minutes + " мин. / " + (hours < 10 ? "0" : "") + hours + ":" + (mins < 10 ? "0" : "") + mins;
        return result;
    }
    const addGenrePosition = (genre: any, isChecked: boolean) => {
        const updatedGenres = isChecked ? [...newFilmGenres, genre.name_en] : newFilmGenres.filter((item) => item !== genre.name_en);
        setNewFilmGenres(updatedGenres);
    }
    const addPersonProf = (prof: any, isChecked: boolean) => {
        const updatedProf = isChecked ? [...personProf, prof.name_en] : personProf.filter((item) => item !== prof.name_en);
        setPersonProf(updatedProf);
    }


    const [personsArray, setPersonsArray] = useState<any[]>([]);
    const addPerson = () => {
        const person = PeopleData.find(person => person.name_ru === personName)||PeopleData.find(person => person.name_en === personName)
        const newPerson = {
            id: PeopleData.length + personsArray.length + 1,
            img: personImg || 'https://i.pinimg.com/736x/4e/cc/67/4ecc67781ecf9bd4b2fd69f7b8e16d02.jpg',
            name: personName,
            professions: personProf
        }
        if (person) {
            setPersonsArray([...personsArray, person])
        } else {
            setPersonsArray([...personsArray, newPerson])
        }
    }
    useEffect(() => {
        console.log(personsArray)
    }, [personsArray])

    let addedFilm = {}
    useEffect(() => {
        addedFilm = {
            id: FilmData.length + 1,
            img: newFilmImg,
            year: newFilmYear,
            country: newFilmCountry,
            tagline: newFilmTagline,
            age: `${newFilmAge}+`,
            time: formatTime(newFilmTime),
            rating: newFilmRating,
            marks: newFilmMarks,
            name_ru: newFilmName_ru,
            name_en: newFilmName_en,
            description: newFilmDescription,
            genres: newFilmGenres,
            director: personsArray.filter(person => person.professions.includes('director')),
            actor: personsArray.filter(person => person.professions.includes('actor')),
            producer: personsArray.filter(person => person.professions.includes('producer')),
            voice: personsArray.filter(person => person.professions.includes('voice')),
            writer: personsArray.filter(person => person.professions.includes('writer')),
            operator: personsArray.filter(person => person.professions.includes('operator')),
            composer: personsArray.filter(person => person.professions.includes('composer')),
            design: personsArray.filter(person => person.professions.includes('design')),
            editor: personsArray.filter(person => person.professions.includes('editor'))
        }
    }, [newFilmImg,
        newFilmYear,
        newFilmCountry,
        newFilmTagline,
        newFilmAge,
        newFilmTime,
        newFilmRating,
        newFilmMarks,
        newFilmName_ru,
        newFilmName_en,
        newFilmDescription,
        newFilmGenres,
        personsArray
    ])

    const [newFilm, setNewFilm] = useState(addedFilm)
    const addNewFilm = () => {
        setNewFilm(addedFilm)
        console.log(newFilm)
    }

    const { t } = useTranslation()

    return (
        <div className={styles.page}>
            <Path>
                <Link to="/"> {t('Path.main')} </Link>
                <Link to="/admin">{t('Path.admin')}</Link>
            </Path>
            <h1 className={styles.header}> {t('Path.admin')} </h1>
            <div className={styles.adminBox}>
                <div className={styles.inputs} data-testid='addInfoFilmBox'>
                    <Input type='text' placeholder={t('AdminPage.image_URL')} onChange={(e) => setNewFilmImg(e.target.value)} />
                    <Input type='number' placeholder={t('AdminPage.year')} onChange={(e) => setNewFilmYear(+e.target.value)} />
                    <Input type='text' placeholder={t('AdminPage.country')} onChange={(e) => setNewFilmCountry([...newFilmCountry, e.target.value])} />
                    <Input type='text' placeholder={t('AdminPage.short_description')} onChange={(e) => setNewFilmTagline(e.target.value)} />
                    <Input type='number' placeholder={t('AdminPage.age')} onChange={(e) => setNewFilmAge(+e.target.value)} />
                    <Input type='number' placeholder={t('AdminPage.duration')} onChange={(e) => setNewFilmTime(+e.target.value)} />
                    <Input type='number' placeholder={t('AdminPage.rating')} onChange={(e) => setNewFilmRating(+e.target.value)} />
                    <Input type='number' placeholder={t('AdminPage.number_of_ratings')} onChange={(e) => setNewFilmMarks(+e.target.value)} />
                    <Input type='text' placeholder={t('AdminPage.name_ru')} onChange={(e) => setNewFilmName_ru(e.target.value)} />
                    <Input type='text' placeholder={t('AdminPage.name_en')} onChange={(e) => setNewFilmName_en(e.target.value)} />
                    <textarea placeholder={t('AdminPage.full_description')} onChange={(e) => setNewFilmDescription(e.target.value)} />
                </div>

                <div className={styles.genreBox} data-testid='adminGenres'>
                    {GenresData.map(filter => (
                        <Checkbox position={filter} key={filter.name_en} func={addGenrePosition} />
                    ))}
                </div >
                <div className={styles.inputs}>
                    <Input type='text' placeholder={t('AdminPage.person_name')} onChange={(e) => setPersonName(e.target.value)} />
                    <Input type='text' placeholder={t('AdminPage.photo_URL')} onChange={(e) => setPersonImg(e.target.value)} />
                    <div className={styles.genreBox}>
                        {ProfessionsData.map(profession => (
                            <Checkbox position={profession} key={profession.name_en} func={addPersonProf} />
                        ))}
                    </div >
                    <div onClick={addPerson}>
                        <Button variant='outlined' >{t('Button.add_person')}</Button>
                    </div>

                    {personsArray.map(person => (
                        <PersonColumn person={person} key={person.name} />
                    ))}
                </div>
            </div>
            <div onClick={addNewFilm}>
                <Button variant='outlined'>{t('Button.add_Film')}</Button>
            </div>
            <div >
                <Button variant='outlined'>{t('Button.del_Film')}</Button>
            </div>
            <Catalog genres={genres} />
        </div>
    );
};

export default AdminPage;