import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import bookingSlice from "./bookingSlice";
import adminSlice from "./adminSlice";

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
