import { configureStore } from "@reduxjs/toolkit";
import threadReducer from './components/features/TweetThread/threadSlice';
import commentReducer from './components/features/Comment/commentSlice';

const rootReducer = configureStore({
  reducer: {
    threads: threadReducer,
    comments: commentReducer,
  },
});

export default rootReducer;