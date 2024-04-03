import { configureStore } from "@reduxjs/toolkit";
import background from "./reducers/background";
import pannel from "./reducers/pannel";
import settings from "./reducers/settings";
const Store = configureStore({
    reducer : {
        background : background,
        pannel : pannel,
        settings : settings,
    }
});export default Store;