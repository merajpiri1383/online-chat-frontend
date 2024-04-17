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
            if (window.screen.width < 992 && action.payload !== "none") {
                state.showPannel = false;
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