import MovieThoughts from "./MovieThoughts";
import TVShowThoughts from "./TVShowThoughts";
import Box from "@mui/material/Box";
import { SpeedDialIcon } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Movie, LiveTv } from "@mui/icons-material";
import { useState } from "react";

const actions = [
  {
    icon: <Movie />,
    name: "Movie Thoughts",
    operation: "movieThoughts",
  },
  {
    icon: <LiveTv />,
    name: "TV Show Thoughts",
    operation: "tvThoughts",
  },
];

export default function MediaThoughts() {
  const [movieThoughts, setMovieThoughts] = useState(true);
  const [tvShowThoughts, setTVShowThoughts] = useState(false);

  function handleToggle(operation) {
    if (operation === "movieThoughts") {
      setTVShowThoughts(false);
      setMovieThoughts(true);
    } else {
      setMovieThoughts(false);
      setTVShowThoughts(true);
    }
  }

  return (
    <>
      {movieThoughts && <MovieThoughts />}
      {tvShowThoughts && <TVShowThoughts />}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(action.operation);
            }}
          />
        ))}
      </SpeedDial>
    </>
  );
}
