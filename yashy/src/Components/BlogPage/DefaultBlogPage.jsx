import { Container, Card, Grid } from "@mui/material";
import { TheaterComedy } from "@mui/icons-material";

import { useState } from "react";

import MovieThoughts from "./MovieThoughts";
import TVShowThoughts from "./TVShowThoughts";

export default function DefaultBlogPage() {
  const [defaultPage, setDefaultPage] = useState(true);
  const [movieThoughts, setMovieThoughts] = useState(false);
  const [tvShowThoughts, setTVShowThoughts] = useState(false);

  function backToDefault(e) {
    e.preventDefault();
    setDefaultPage(true);
    setTVShowThoughts(false);
    setMovieThoughts(false);
  }

  function showMovieThoughts(e) {
    e.preventDefault();
    setDefaultPage(false);
    setTVShowThoughts(false);
    setMovieThoughts(!movieThoughts);
  }

  function showTVThoughts(e) {
    e.preventDefault();
    setDefaultPage(false);
    setMovieThoughts(false);
    setTVShowThoughts(!tvShowThoughts);
  }

  return (
    <>
      {defaultPage && (
        <Container
          sx={{
            backgroundColor: "#E9BEBE",
            padding: 4,
            marginTop: 5,
          }}
        >
          <Card
            className="blog-page-card"
            sx={{
              textAlign: "center",
              padding: 2,
              borderRadius: "16px",
            }}
            elevation={0}
          >
            I document my brief thoughts here on the movies and tv shows I watch
            and plan to watch (I assume you've watched them too!). Click to view
            either
            <button className="blog-page-links" onClick={showMovieThoughts}>
              movie
            </button>
            or
            <button className="blog-page-links" onClick={showTVThoughts}>
              tv
            </button>
            thoughts.
            <br />
            <TheaterComedy sx={{ margin: "auto", width: 150, height: 150 }} />
          </Card>
        </Container>
      )}
      {movieThoughts && (
        <MovieThoughts
          backToDefault={backToDefault}
          showTVThoughts={showTVThoughts}
        />
      )}
      {tvShowThoughts && (
        <TVShowThoughts
          backToDefault={backToDefault}
          showMovieThoughts={showMovieThoughts}
        />
      )}
    </>
  );
}
