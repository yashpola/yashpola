import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import MediaThoughts from "../BlogPage/MediaThoughts";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import NoPage from "./NoPage";
import { Stack } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-brand" style={{ margin: "10px" }}>
          Yashy <br /> Polapragada
        </div>
        <Stack direction="row" spacing={2}>
          <div className="nav-item" style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "pink" : "grey",
              })}
            >
              About
            </NavLink>
          </div>
          <div className="nav-item" style={{ margin: "10px" }}>
            <NavLink
              to="/blog"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "pink" : "grey",
              })}
            >
              Blog
            </NavLink>
          </div>
          <div className="nav-item" style={{ margin: "10px" }}>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "pink" : "grey",
              })}
            >
              Portfolio
            </NavLink>
          </div>
        </Stack>
      </div>
      <Routes>
        <Route exact path="/" element={<AboutPage />} />
        <Route exact path="/blog" element={<MediaThoughts />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
