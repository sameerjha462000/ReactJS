import ReactDOM from "react-dom/client";
import { Provider } from "./contexts/NumberContext";
import App from "./App";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
