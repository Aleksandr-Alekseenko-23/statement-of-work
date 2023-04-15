import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import GlobalStyles from "./utils/globalStyle/globalStyle";
import Loader from "./components/Common/Loader/Loader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {/* <BrowserRouter basename="statement-of-work"> */}
        <App />
        {/* </BrowserRouter> */}
      </PersistGate>
    </Provider>
    <GlobalStyles />
  </>
);
