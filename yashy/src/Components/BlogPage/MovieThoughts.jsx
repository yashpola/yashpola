import { Grid, Button } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import MoviePosts from "./Posts/MoviePosts";
import { useEffect } from "react";

export default function MovieThoughts({ backToDefault, showTVThoughts }) {
  const moviePosts = [];

  function stuff() {
    if (moviePosts.length === 0) {
      Object.keys(MoviePosts).forEach((key, index) =>
        moviePosts.push(
          <Grid item xs={12} sm={4} key={index}>
            <CurrentReviewCard {...MoviePosts[key]} />
          </Grid>
        )
      );

      console.log(moviePosts);
    }
  }

  useEffect(() => {
    stuff();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            sx={{
              backgroundColor: "black",
              border: "none",
              marginTop: 2,
              marginLeft: 2,
            }}
            onClick={backToDefault}
            variant="contained"
          >
            Back to Home
          </Button>{" "}
          <Button
            sx={{
              backgroundColor: "black",
              border: "none",
              marginTop: 2,
              marginLeft: 2,
            }}
            onClick={showTVThoughts}
            variant="contained"
          >
            TV Thoughts
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1>Yashy's Movie Thoughts</h1>
        </Grid>
        <Grid item xs={12}>
          <CurrentReviewCard {...MoviePosts.Inglourious} />
          <CurrentReviewCard {...MoviePosts.TrainingDay} />
          <CurrentReviewCard {...MoviePosts.NoCountry} />
          <CurrentReviewCard {...MoviePosts.Oppenheimer} />
        </Grid>
      </Grid>
    </>
  );
}
