import { ChangeEvent, useRef, useState} from 'react';
import s from './customPlayer.module.scss';
import { useAppSelector } from '../../../../hooks';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';
export const CustomPlayer:React.FC = () => {
    const [timeProgress, setTimeProgress] = useState(0);
    const currentSong = useAppSelector(state => state.playlistData.currentSong);
    const isPlaying = useAppSelector(state => state.playlistData.isPlaying);
    const audioPlayerRef = useRef(null);
    const progressBarRef:React.RefObject<HTMLInputElement> = useRef(null);
    const handleTimeUprate = (event:ChangeEvent<HTMLAudioElement>) => {
        setTimeProgress(event.target.currentTime);
    }
   
   

    
    return (
        <div className={s.customPlayer}>
           <audio 
           src={currentSong?.audio}
           ref={audioPlayerRef}
           autoPlay={true}
           onTimeUpdate={handleTimeUprate}
          
           >
           </audio>
           <Controls isPlaying={isPlaying} audioPlayerRef={audioPlayerRef}/>
           <ProgressBar progressBarRef={progressBarRef} audioPlayerRef={audioPlayerRef} timeProgress={timeProgress}/>
        </div>
    )
}