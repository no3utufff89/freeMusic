import { CirclePause, SkipBack, SkipForward, Triangle } from 'lucide-react';
import s from './controls.module.scss';
import { useAppDispatch } from '../../../../hooks';
import { togglePlay } from '../../../../store/playlist/playlistSlice';
import { useEffect } from 'react';
type IProps = {
    isPlaying: boolean,
    audioPlayerRef: React.RefObject<HTMLAudioElement>,
}
export const Controls:React.FC<IProps> = ({isPlaying, audioPlayerRef}) => {
    const dispatch = useAppDispatch();
    const togglePlayPause = () => {
         dispatch(togglePlay());
         audioPlayerRef.current?.play();
    }
    useEffect(() => {
        if(isPlaying && audioPlayerRef.current) {
            audioPlayerRef.current.play();
        } else {
            audioPlayerRef.current?.pause();
        }
      }, [isPlaying, audioPlayerRef]);
    return (
        <div className={s.controlsBlock}>
            <button><SkipBack size={20} color='white'/></button>
            {!isPlaying ? <button onClick={togglePlayPause} className={s.playBtn}><Triangle transform='rotate(90)' size={20}  /></button> : <button onClick={togglePlayPause}><CirclePause size={30} color='white'/></button>}
            <button><SkipForward size={20} color='white' /></button>
        </div>
      
    )
}