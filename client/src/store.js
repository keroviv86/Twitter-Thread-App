import { configureStore } from "@reduxjs/toolkit";
import threadReducer from './components/features/TweetThread/threadSlice';


const rootReducer = configureStore({
  reducer: {
    threads: threadReducer,
  },
});

export default rootReducer;
