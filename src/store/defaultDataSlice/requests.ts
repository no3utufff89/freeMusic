import { createAsyncThunk } from "@reduxjs/toolkit";
import DefaultService from "../../services/DefaultService";
import RadioService from "../../services/RadioService";
import ArtistsService from "../../services/ArtistsService";
import Genresservice from "../../services/GenresService";

export const getDefaultTracks = createAsyncThunk(
    'data/getDefaultTracks',
    async () => {
        const [topChart, weekChart] = await Promise.all([
            DefaultService.fetchDefaultSongs('',''), 
            DefaultService.fetchWeekMusicData()]);
        return [topChart.data, weekChart.data]
    }
);
export const getCurrentPlaylistData = createAsyncThunk(
    'data/getCurrentPlaylist',
    async (genre:string) => {
       const response = await Genresservice.fetchCurrentGenreAlbums(genre);
       return response.data;
    }
)
export const getRadios = createAsyncThunk(
    'data/getRadios',
    async () => {
       const response = await RadioService.getRadios();
       return response.data;
    }
)
export const getArtistsData = createAsyncThunk(
    'data/getArtistsData',
    async () => {
        const response = await ArtistsService.getArtists();
        return response.data;
    }
)