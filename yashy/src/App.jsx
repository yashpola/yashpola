import "./Styles.css";
import NavBar from "./Components/Universal/NavBar";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}
