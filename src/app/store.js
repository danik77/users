import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga);
