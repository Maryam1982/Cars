import "bulma/css/bulma.css";
import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./store";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
