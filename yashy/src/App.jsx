import "./Styles.css";
import NavBar from "./Components/Universal/NavBar";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}
