import styles from './PersonColumn.module.scss'
import PeopleData from '../../PeopleData.json'
import { crossPoint } from '../../types/types';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import TranscriptionData from '../../TranscriptionData.json'
import { useTranslation } from 'react-i18next';

interface PersonColumnProps {
    person: crossPoint
}

const PersonColumn: FC<PersonColumnProps> = ({ person }) => {
    const { i18n } = useTranslation()
    const RusLanguage = ( i18n.resolvedLanguage === 'ru' )

    const currentPerson = PeopleData.find((obj) => obj.id === person.id) ? PeopleData.find((obj) => obj.id === person.id) : person
    return (
        <div className={styles.PersonColumn}>
            <Link to={`/persons/${currentPerson?.id}`} className={styles.personRow}>
                <div  className={styles.avatar}>
                    <img src={`http://localhost:4998/${currentPerson?.poster}`} alt="" />
                </div>
                <span className={styles.personName}>{RusLanguage ? currentPerson?.name_ru : currentPerson?.name_en}</span>
            </Link>
        </div>
    );
};

export default PersonColumn;