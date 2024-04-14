import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
    name : "page",
    initialState : {
        current : window.screen.width > 992 ? "auth" : "none",
        showPannel : true 
    },
    reducers : {
        changePage : (state,action) => {
            if (window.screen.width < 992 && action.payload !== "none") {
                state.showPannel = false;
            }
            state.current = action.payload 
        },
        changeShowPannel : (state,action) =>  {
            state.showPannel = action.payload ;
        }
    }
});export const {changePage,changeShowPannel} = pageSlice.actions ; export default pageSlice.reducer;