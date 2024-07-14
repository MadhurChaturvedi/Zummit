import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import bookingSlice from "./Slices/bookingSlice";
import adminSlice from "./Slices/adminSlice";
import therapistSlice from "./Slices/therapistSlice";

 const appStore = configureStore({
    reducer:{
        admin:adminSlice,
        user: userSlice,
        therapist: therapistSlice,
        booking: bookingSlice
    }
})
export default appStore;
