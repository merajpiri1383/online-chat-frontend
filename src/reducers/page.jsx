import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
    name : "page",
    initialState : {
        current : window.screen.width > 992 ? "auth" : "none",
        showPannel : true ,
        chat_type : "chat" ,
    },
    reducers : {
        changePage : (state,action) => {
            state.showPannel = true ;
            if (window.screen.width < 992 && action.payload !== "none") {
                state.showPannel = false;
            }
            if (window.screen.width < 992 && action.payload === "auth") {
                state.showPannel = true;
            }
            state.current = action.payload 
        },
        changeShowPannel : (state,action) =>  {
            state.showPannel = action.payload ;
        },
        changeChatType : (state,action) => {
            state.chat_type = action.payload
        }
    }
});export const {changePage,changeShowPannel,changeChatType} = pageSlice.actions ; export default pageSlice.reducer;