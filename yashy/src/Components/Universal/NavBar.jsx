import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import DefaultBlogPage from "../BlogPage/DefaultBlogPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import NoPage from "./NoPage";
import { Container, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <div style={{ fontSize: 30, marginTop: "10px", textAlign: "center" }}>
        Yashy Polapragada
      </div>
      <Container
        sx={{
          fontSize: 20,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          padding: 3,
          marginBottom: 5,
          borderBottom: "3px solid #5cc9eb",
        }}
      >
        <Stack direction="row" spacing={2}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "pink" : "grey",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "pink" : "grey",
            })}
          >
            Blog
          </NavLink>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "pink" : "grey",
            })}
          >
            Portfolio
          </NavLink>
        </Stack>
      </Container>
      <Routes>
        <Route exact path="/" element={<AboutPage />} />
        <Route exact path="/blog" element={<DefaultBlogPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
