import { createSlice } from "@reduxjs/toolkit";
import { PlaylistType, SongData } from "../../types";

const initialState:PlaylistType<SongData> = {
     songs: undefined,
     isPlaying: false,
     isLooping: false,
     currentSong: null,
     isActive: false,
     };
     


const playList = createSlice({
    name: 'playlist',
    initialState: initialState,
    reducers: {
        setSongs: (state, action) => {
            state.songs = action.payload;
        },
    
        setCurrentSong: (state, action) => {
             state.currentSongIndex = action.payload.index;
             state.currentSong = action.payload;
             state.isPlaying = true;
             state.isActive = true;
        },
        togglePlay: (state) => {
            state.isPlaying =!state.isPlaying;
        }
    },

});
export const { setSongs, setCurrentSong, togglePlay } = playList.actions;
export default playList.reducer;