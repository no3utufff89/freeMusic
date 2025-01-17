import { useEffect, useRef } from 'react';
import { MusicGenresDataType } from '../../../../types';
import s from './genre.module.scss';
import { randomColors } from '../../../../staticData';
import { generateRandomColor } from '../../../../utils';
import { Link } from 'react-router';

export const Genre:React.FC<MusicGenresDataType> = (props) => {
    const genreCardRef:React.RefObject<HTMLAnchorElement> = useRef(null);
    useEffect(() => {
        const btn = genreCardRef.current;
        btn?.style.setProperty(
            "background-color", generateRandomColor(randomColors)
        );
    },[])
    return (
        <Link to={`/genres/${props.name}`} className={s.genreItem} ref={genreCardRef}>
            <img className={s.image} src={`./public/icons/${props.icon}.svg`} alt={props.name} />
            <span className={s.title}>{props.label}</span>
        </Link>
    )
}