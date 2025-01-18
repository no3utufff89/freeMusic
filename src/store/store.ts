import { configureStore } from '@reduxjs/toolkit';
import defaultReducer from './defaultDataSlice/defaultDataSlice';
import radioReducer from './radioStreamSlice/radioStreamSlice';
import artstsReducer from './artistsDataSlice/artistsDataSlice';
import playlistReducer from './playlist/playlistSlice';
import currentPlaylistReducer from './currenGenreSlice/currentGenreSlice';

const store = configureStore({
    reducer: {
       defaultData: defaultReducer,
       radioData: radioReducer,
       artistsData: artstsReducer,
       playlistData: playlistReducer,  
       currentPlaylistdata: currentPlaylistReducer,

    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
export default store;
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
