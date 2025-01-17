import { createSlice } from "@reduxjs/toolkit";
import { ArtistDataType, CommonResponseType, DefaultStateType } from "../../types";
import { getArtistsData } from "../defaultDataSlice/requests";

const initialState:DefaultStateType<CommonResponseType<ArtistDataType>> = {
    loading: false,
    data: {
        artistsData: null,
    }
}

const artistData = createSlice({
    name: 'artists',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
           .addCase(getArtistsData.pending, (state) => {
                state.loading = true;
            })
          .addCase(getArtistsData.fulfilled, (state, action) => {
             state.loading = false;
             if(action.payload.headers.status ==='success') {
                state.data.artistsData = action.payload
             }
 
          })
    }
})
export default artistData.reducer;