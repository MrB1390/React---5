import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardSlice";

export  const cardStore = configureStore({
    reducer:{
        val:CardReducer
    },
})