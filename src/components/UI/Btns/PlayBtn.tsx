import { CirclePlay } from "lucide-react"
import { useAppDispatch } from "../../../hooks"
import { setCurrentSong } from "../../../store/playlist/playlistSlice";
import { SongData } from "../../../types";

export const PlayBtn:React.FC<SongData> = (props) => {
    const dispatch = useAppDispatch();
    const handlePlay = () => {
        dispatch(setCurrentSong(props));
    }
    return (
        <button 
            onClick={handlePlay} 
            className="btn playBtn justify-self-end" 
            data-source={props.audio}>
            <CirclePlay color="#1E2023" />
        </button>
    )
}