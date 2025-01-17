import { RadioResultsResponseItem } from '../../../types';
import s from './radioElement.module.scss';
export const RadioElement:React.FC<RadioResultsResponseItem> = (item) => {
    return (
        <li className={s.radioElement}>
            <img src={item.image} alt={item.dispname} className={s.radioImage}/>
            <div className={s.info}>
                <span className={s.name}>{item.dispname}</span>
            </div>
        </li>
    )
}