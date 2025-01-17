import { createSlice } from "@reduxjs/toolkit";
import { getDefaultTracks } from "./requests";
import { DefaultResponseType, DefaultStateType } from "../../types";
const initialState:DefaultStateType<DefaultResponseType> = {
    loading: false,
    data: {
        topChartData: null,
        weekChartData: null,
    }
}
const defaultData = createSlice({
    name: "data",
    initialState:  initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    
    extraReducers(builder) {
        builder
           .addCase(getDefaultTracks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDefaultTracks.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload[0].headers.status === 'success') {
                    const responseData = (action.payload[0].results).map(
                        (song, index) => ({...song, songSerialNumber: index + 1 })
                    )
                state.data.topChartData = {
                    headers: action.payload[0].headers,
                    results: responseData,
                    }
                }
                if(action.payload[1].headers.status === 'success') {
                    const responseData = (action.payload[1].results).map(
                        (song, index) => ({...song, songSerialNumber: index + 1 })
                    )
                state.data.weekChartData = {
                    headers: action.payload[1].headers,
                    results: responseData,
                    }
                }
            })
            //add error handling
    }
})

export const { setData } = defaultData.actions;
export default defaultData.reducer;