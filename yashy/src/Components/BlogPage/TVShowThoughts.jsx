import { Grid, Button } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import TVShowPosts from "./Posts/TVShowPosts";

export default function TVShowThoughts({ backToDefault, showMovieThoughts }) {
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
            onClick={showMovieThoughts}
            variant="contained"
          >
            Movie Thoughts
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1>Yashy's TV Thoughts</h1>
        </Grid>
        <Grid item xs={12}>
          <CurrentReviewCard {...TVShowPosts.Suits} />
          <CurrentReviewCard {...TVShowPosts.MadMen} />
        </Grid>
      </Grid>
    </>
  );
}
