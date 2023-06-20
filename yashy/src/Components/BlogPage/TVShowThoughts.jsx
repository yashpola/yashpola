import { Grid, Button, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
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
          <h1>Current Reviews</h1>
          <CurrentReviewCard {...TVShowPosts.Suits} />
          <CurrentReviewCard {...TVShowPosts.MadMen} />
        </Grid>
        <Grid item xs={12}>
          <h1>Upcoming Reviews</h1>
          <UpcomingReviewCard title={TVShowPosts.BreakingBad.title} />
          <UpcomingReviewCard title="House of Cards (2013) | Beau Willimon | Kevin Spacey, Robin Wright" />
        </Grid>
      </Grid>
    </>
  );
}
