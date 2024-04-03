import {createSlice} from "@reduxjs/toolkit";
const settings = createSlice({
    name : "settings",
    initialState : {
        current : "none",
    },
    reducers : {
        changeCurrent : (state,action) => {
            state.current = action.payload
        }
    }
});export const {changeCurrent} = settings.actions;export default settings.reducer;