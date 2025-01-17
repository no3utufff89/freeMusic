import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAppSelector } from "../../../hooks";

export const Player:React.FC = () => {
    const musicTracks = useAppSelector(state => state.defaultData.data?.results);

   console.log(musicTracks);
   
    return (
        <AudioPlayer
        
        />
    )
}