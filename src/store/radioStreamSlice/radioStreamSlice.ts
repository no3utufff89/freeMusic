import { createSlice } from "@reduxjs/toolkit";
import { getRadios } from "../defaultDataSlice/requests";
import { DefaultStateType, RadioResponse } from "../../types";
const initialstate:DefaultStateType<RadioResponse> = {
    loading: false,
    data: {
        radioData: null,
    }
}
const radioData = createSlice({
    name: "radioData",
    initialState: initialstate,
    reducers: {
       
    },

    extraReducers(builder) {
        builder
         .addCase(getRadios.pending, (state) => {
                state.loading = true;
            })
           .addCase(getRadios.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.headers.status === 'success') {
                   state.data.radioData = action.payload
                }
            })
    }
})
export default radioData.reducer;
