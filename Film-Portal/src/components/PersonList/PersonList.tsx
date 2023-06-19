import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './PersonList.module.scss'
import TranscriptionData from '../../TranscriptionData.json'
import PersonColumn from '../PersonColumn/PersonColumn';
import { crossPoint } from '../../types/types';
import { useTranslation } from 'react-i18next';

interface PersonListProps {
    position: crossPoint[],
    nameProfessions: string
}

const PersonList: FC<PersonListProps> = ({ position, nameProfessions }) => {

    const { t } = useTranslation()

    const [PersonLenghtState, getPersonLenghtState] = useState(false)
    useEffect(() => {
        console.log(PersonLenghtState)
    }, [PersonLenghtState])
    const showMore = () => {
        getPersonLenghtState(!PersonLenghtState)
        setNumVisible(position.length)
    }
    const showHide = () => {
        getPersonLenghtState(!PersonLenghtState)
        setNumVisible(5)
    }
    const [numVisible, setNumVisible] = useState(5)
    return (
        <div>
            <h3 className={styles.columnHeader} data-testid='persons'> {nameProfessions} </h3>
            {position.slice(0, numVisible).map((person) => (
                <PersonColumn person={person} />
            ))}
            {numVisible <= position.length &&
                <div>
                    <div className={styles.toggleLenght} style={PersonLenghtState ? { display: 'none' } : { display: 'flex' }} onClick={showMore}>
                        <div className={styles.more} data-testid='more'> {t('FilmPage.more')}</div>
                        <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                    </div>
                    <div className={styles.toggleLenght} style={PersonLenghtState ? { display: 'flex' } : { display: 'none' }} onClick={showHide}>
                        <div className={styles.more} data-testid='hide'> {t('FilmPage.hide')}</div>
                        <img src="https://start.ru/static/images/product/arrow-down.svg" alt="" />
                    </div>
                </div>}

        </div >

    );
};

export default PersonList;