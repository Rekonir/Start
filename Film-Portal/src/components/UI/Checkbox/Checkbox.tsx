import { FC,  useState } from 'react';
import styles from './Checkbox.module.scss'
import { useTranslation } from 'react-i18next';

export interface CheckboxProps {
    position: any
    func?: any
}

const Checkbox: FC<CheckboxProps> = ({ position, func }) => {
    const [checked, setChecked] = useState(false);

    const { i18n } = useTranslation()
    const  RusLanguage = i18n.resolvedLanguage === 'ru'

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        func(position, e.target.checked)
    };
    return (
        <label className={styles.checkboxPoint} key={position.name_en} >
            <input type="checkbox" data-testid='checkbox' checked={checked} className={styles.checkbox} onChange={handleCheckboxChange} value={position.name_en} name="genre" />
            {RusLanguage? position.name_ru : position.name_en}
        </label>
    );
};

export default Checkbox;