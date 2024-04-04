import { configureStore } from "@reduxjs/toolkit";
import background from "./reducers/background";
import pannel from "./reducers/pannel";
import settings from "./reducers/settings";
import messageSubPannel from "./reducers/messageSubPannlel";
const Store = configureStore({
    reducer : {
        background : background,
        pannel : pannel,
        settings : settings,
        message_sub_pannel : messageSubPannel,
    }
});export default Store;