import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

 export const store =configureStore({
    //reducer can only update value in store 
    //reducer key is pre defined(object which can hold more than onee reducer )
    reducer:{
            counter:counterSlice
    }
})