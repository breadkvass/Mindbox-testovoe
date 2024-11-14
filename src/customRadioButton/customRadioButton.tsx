import { FC } from 'react';
import styles from './customRadioButton.module.css';

type CustomRadioButtonProps = {
    label: string;
    selected: any;
    onSelect: any;
}

export const CustomRadioButton: FC<CustomRadioButtonProps> = ({
    label,
    selected,
    onSelect,
}) => { 

    const styleButton = selected ? styles.radioButton + ' ' + styles.selected : styles.radioButton ;
    
    return (
        <button
            className={styleButton}
            onClick={onSelect}
        >
            {label}
        </button>
)}
;
