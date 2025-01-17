import { Aside } from '../blocks/Aside/Aside';
import { Content } from '../blocks/Content/Content';
import { Header } from '../blocks/Header/Header';
import { AudioPlayerSection } from '../blocks/PlayerBar/AudioPlayerSection';
import s from './layout.module.scss';

export const Layout = () => {
    
    return (
        <div className={`${s.layout}`}>
           <Header/>
           <Aside/>
           <Content/>
          
          
           <AudioPlayerSection/>
          
        </div>
    )
}