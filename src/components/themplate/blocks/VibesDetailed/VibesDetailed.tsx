import { musicGenres } from '../../../../staticData';
import { SectionHeader } from '../Reacomendations/SectionHeader';
import { Genre } from './Genre';
import s from './vibesDetailed.module.scss';

export const VibesDetailed:React.FC = () => {
    return (
        <div className={s.vibesDetailed}>
            <SectionHeader title='Жанры' subtitle='Музыка разных жанров под любое настроение'/>
            <div className={s.vibesList}>
                {musicGenres.map(item => {
                    return <Genre key={item.name} {...item}/>
                })}
               
            </div>
        </div>
    )
}