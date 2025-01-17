export const CurrentAudio = () => {
    return (
        <div className="currentAudioBlock z-10 bg-lightkBg">
            <audio controls autoPlay>
                <source src='audio.mp3' type='audio/mpeg'/>
            </audio>
        </div>
       
    )
}