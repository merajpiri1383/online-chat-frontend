import { configureStore } from "@reduxjs/toolkit";
import background from "./reducers/background";
const Store = configureStore({
    reducer : {
        background : background
    }
});export default Store;