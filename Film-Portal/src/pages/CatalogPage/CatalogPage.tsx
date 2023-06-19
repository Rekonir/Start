import styles from './CatalogPage.module.scss'
import { Link, useParams } from 'react-router-dom';
import Path from '../../components/UI/Path/Path';
import GenresData from '../../GenresData.json'
import Catalog from '../../components/Catalog/Catalog';
import { useTranslation } from 'react-i18next';


const CatalogPage = () => {

    const { t, i18n } = useTranslation()

    const { genre } = useParams()
    const genres = genre?.split('+') || ['']
    const genrePosition = genres?.map((genre) => {
        const foundGenre = GenresData.find((data) => data.name_en === genre);
        return i18n.resolvedLanguage === 'ru' ? foundGenre?.name_ru : foundGenre?.name_en;
    });

    return (
        <div className={styles.page}>
            <Path>
                <Link to="/"> {t('Path.main')} </Link>
                <Link to="/movies">{t('Path.Movies')}</Link>
                {!genres.includes('') && genrePosition?.map(genrePosition => {
                    return <Link to={`/movies/${genrePosition}`}>{genrePosition}</Link>
                })}
            </Path>
            <h1 className={styles.header} > {t('Catalog.header')}</h1>
            <Catalog genres={genres} />
        </div >
    );
};

export default CatalogPage;