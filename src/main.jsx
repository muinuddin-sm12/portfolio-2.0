import * as ReactDOM from "react-dom/client";
import { router } from "./routes/Routes";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
