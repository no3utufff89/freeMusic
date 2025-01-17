import { useAppSelector } from '../../../../hooks';
import { CustomPlayer } from '../CustomPlayer/CustomPlayer';
import s from './audioPlayerSection.module.scss';
export const AudioPlayerSection: React.FC = () => {
    const currentSongData = useAppSelector(state => state.playlistData.currentSong);
    const isPlayerActive = useAppSelector(state => state.playlistData.isActive);

    return (
        <>
        {isPlayerActive && (
            <section className={`${s.playerSection}`}>
            {currentSongData ? (
                <div className={`${s.audioInfo}`}>
                    <img className={`${s.songImage}`} src={currentSongData.image} alt={currentSongData.name} />
                    <div className={`${s.songInfo}`}>
                        <a href="/" className={`${s.songTitleLink}`}>{currentSongData.name}</a>
                        <a href="/" className={`${s.artistNameLink}`}>{currentSongData.artist_name}</a>
                    </div>
                </div>
            ) : (
              <div></div>
            )}

            <CustomPlayer />
        </section>
        )}
       
        </>
        

    )
}