import { ChangeEvent, useEffect } from "react";
import s from './progressBar.module.scss';
import { useAppSelector } from "../../../../hooks";
import { formatTime } from "../../../../utils";
type IProps = {
    audioPlayerRef: React.RefObject<HTMLAudioElement>,
    progressBarRef: React.RefObject<HTMLInputElement>,
    timeProgress:number,
}   
export const ProgressBar:React.FC<IProps> = ({audioPlayerRef, progressBarRef, timeProgress}) => {
    const currentDurationTime = useAppSelector(state => state.playlistData.currentSong?.duration);


    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const currentValue = +event.target.value;
        const maxValue = +event.target.max || 100;
        const fillPercentage = (currentValue / maxValue) * 100;
        if (audioPlayerRef.current) {
            audioPlayerRef.current.currentTime = +currentValue;
        }   
        progressBarRef.current?.style.setProperty(
            "--fill-percentage",
            fillPercentage + "%"
          );    
    }
    useEffect(() => {
        const currentValue = progressBarRef.current?.value || 0;
        const maxValue = progressBarRef.current?.max || 100;
        const fillPercentage = (+currentValue / +maxValue) * 100;
         
        progressBarRef.current?.style.setProperty(
            "--fill-percentage",
            fillPercentage + "%"
          );    
    },[timeProgress])

    return (
        <div className={s.barContainer}>
            <span>{formatTime(timeProgress)}</span>
             <input type="range" 
            value={timeProgress}
             className={s.progressLine}
             ref={progressBarRef}
             onChange={(e) => handleChange(e)}  
             max={currentDurationTime} 
        />
        <span>{formatTime(currentDurationTime)}</span>
        </div>
       
    )
}