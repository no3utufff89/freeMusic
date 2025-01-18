import { useAppSelector } from '../../../../hooks';
import { SongBlock } from '../../../UI/SongBlock/SongBlock';
import s from './tracksList.module.scss';

export const TracksList:React.FC = () => {
    const currentGenreData = useAppSelector(state => state.currentPlaylistdata.data.currentPlaylistData?.results);

    return (
        <ul className={s.list}>
            {currentGenreData?.map(item => (
                <SongBlock key={item.id} {...item}/>
            ))}
        </ul>
    )
}