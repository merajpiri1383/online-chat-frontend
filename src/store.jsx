import { configureStore } from "@reduxjs/toolkit";
import background from "./reducers/background";
import pannel from "./reducers/pannel";
const Store = configureStore({
    reducer : {
        background : background,
        pannel : pannel,
    }
});export default Store;