import { createSlice } from "@reduxjs/toolkit";
import { DefaultResponseType, DefaultStateType } from "../../types";
import { getCurrentPlaylistData } from "../defaultDataSlice/requests";

const initialState:DefaultStateType<DefaultResponseType> = {
    loading: false,
    data: {
        currentPlaylistData: null,
    },
}
const currentPlaylistData = createSlice({
    name: "currentPlaylist",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
           .addCase(getCurrentPlaylistData.pending, (state) => {
                state.loading = true;
                state.data.currentPlaylistData = null;
            })
           .addCase(getCurrentPlaylistData.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.headers.status ==='success') {
                    const responseData = (action.payload.results).map(
                        (song, index) => ({...song, songSerialNumber: index + 1 })
                    )
                    state.data.currentPlaylistData = {
                        headers: action.payload.headers,
                        results: responseData,
                    }
                }
            })
           .addCase(getCurrentPlaylistData.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default currentPlaylistData.reducer;