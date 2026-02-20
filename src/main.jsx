import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import Web3Provider from './context/Web3Provider.jsx';
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* The Provider makes the Redux store available to any component in the app */}
    <Provider store={store}>
      <Web3Provider>
        <App />
      </Web3Provider>
    </Provider>
  </StrictMode>,
);



