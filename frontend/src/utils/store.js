import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import bookingSlice from "./Slices/bookingSlice";
import adminSlice from "./Slices/adminSlice";

// const persistConfig = {
//     key: 'store',
//     storage,
// }

// const rootReducer = combineReducers({
//     admin:adminSlice,
//     user: userSlice,
//     booking: bookingSlice
// // })
// const persistedReducer = persistReducer(persistConfig, rootReducer)

 const appStore = configureStore({
    reducer:{
        admin:adminSlice,
        user: userSlice,
        booking: bookingSlice
    }
})
export default appStore;
