import { useEffect, useRef } from 'react';
import s from './VibeBtn.module.scss';
import { randomColors } from '../../../staticData';
import { generateRandomColor } from '../../../utils';
import { VibeBtnPropsType } from '../../../types';

export const VibeButton:React.FC<VibeBtnPropsType> = (props) => {
    const currentBtnRef:React.RefObject<HTMLButtonElement> = useRef(null);
    useEffect(() => {
        const btn = currentBtnRef.current;
        btn?.style.setProperty(
            "background-color", generateRandomColor(randomColors)
        );
    },[])
    return (
        <button className={s.btn} ref={currentBtnRef} data-genre={props.name}>
            {props.title}
        </button>
    )
}