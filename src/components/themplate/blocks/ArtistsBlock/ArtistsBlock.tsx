import s from './artistsBlock.module.scss';
import { Artist } from '../../../UI/Artist/Artist';
import { SectionHeader } from '../Reacomendations/SectionHeader';
import { Artistsprops } from '../../../../types';
import { useLocation } from 'react-router';
export const ArtistsBlock:React.FC<Artistsprops> = (props) => {
    
    const pathname = useLocation().pathname;
    let filtredData;
    if(props.data) {
        filtredData = props.data?.filter(artist => artist.image !== '');
    }    
    const slicedArtistData = filtredData?.slice(0,4);
    return (
        <section className='section'>
        <SectionHeader title='Популярные исполнители' subtitle='Музыка самых прослушиваемых исполнителей'/>
        <ul className={s.artists}>
           {pathname === '/' ? (
             slicedArtistData?.map(artist => (
                 <Artist key={artist.id} {...artist}/>
             ))
           ):
           (
             filtredData?.map(artist => (
                 <Artist key={artist.id} {...artist}/>
             ))
           )}
        </ul>
       
       
        </section>
       
    )
}