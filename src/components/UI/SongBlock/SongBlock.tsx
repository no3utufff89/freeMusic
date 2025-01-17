import clsx from "clsx";
import { SongData } from "../../../types"
import { formatTime } from "../../../utils";
import { PlayBtn } from "../Btns/PlayBtn"
import s from './songBlock.module.scss';

export const SongBlock:React.FC<SongData> = (props) => {
    return (
        <li className={`${s.songBlock} `}>
            <span className="text-center">{props.songSerialNumber}</span>
            <div className={clsx(s.songBlock__content)}>
                <img src={props.image} alt={props.artist_name} width={50} height={50} className={clsx(s.songBlock__image)}/>
               <div className={clsx(s.songBlock__info)}>
               <span className={clsx(s.songBlock__name)}>
                    {props.name}
                </span>
                <span className={clsx(s.songBlock__artist)}>
                    {props.artist_name}
                </span>
               </div>
             
            </div>
            <span className={clsx(s.songBlock__duration)}>{formatTime(props.duration)}</span>
            <PlayBtn {...props}/>
        </li>
    )
}