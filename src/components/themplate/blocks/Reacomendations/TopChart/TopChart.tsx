import { Chartprops } from "../../../../../types";
import { SongBlock } from "../../../../UI/SongBlock/SongBlock";
import { SectionHeader } from "../SectionHeader";
import s from './reacomendations.module.scss';
import { useLocation } from "react-router";

export const TopChart:React.FC<Chartprops> = (props) => {
    const slicedMusicData = props.data?.slice(0,8);
    const pathname = useLocation().pathname;
    
    
    return (
        <section className="recomendationsBlock section">
            <SectionHeader {...props}/>
             <ul className={s.recomedationsList}>
                {pathname === '/' ? (
                    slicedMusicData?.map(item => (
                        <SongBlock key={item.id} {...item}/>
                    ))
                ): 
                (
                    props.data?.map(item => (
                        <SongBlock key={item.id} {...item}/>
                    ))
                )}
        
             </ul>
            
        </section>
       
    )
}