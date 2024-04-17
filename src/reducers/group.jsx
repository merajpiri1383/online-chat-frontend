import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name : "group",
    initialState : {
        "name": null ,
        "toggle": true ,
        "create_by" :{} ,
        "image" : null ,
        "id" : null ,
    },
    reducers : {
        changeGroup : (state,action) => {
            state.name = action.payload.name 
            state.create_by = action.payload.create_by 
            state.image = action.payload.image 
            state.id = action.payload.id 
        },
        groupToggle : (state,action) => {
            state.toggle = !state.toggle
        }
    }
});export const {changeGroup,groupToggle} = groupSlice.actions;export default groupSlice.reducer;