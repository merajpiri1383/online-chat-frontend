import { configureStore } from "@reduxjs/toolkit";
import backgroundSlice from "./reducers/background";
import pannelSlice from "./reducers/pannel";
import settingSlice from "./reducers/settings";
import messageSubPannleSlice from "./reducers/messageSubPannlel";
import contactSlice from "./reducers/contact";
import pageSlice from "./reducers/page";
import userSlice from "./reducers/user";
import messageSlice from "./reducers/message";
import groupSlice from "./reducers/group";

const Store = configureStore({
    reducer : {
        background : backgroundSlice,
        pannel : pannelSlice,
        settings : settingSlice,
        message_sub_pannel : messageSubPannleSlice,
        contact : contactSlice ,
        page : pageSlice,
        user : userSlice,
        message : messageSlice,
        group : groupSlice,
    }
});export default Store;