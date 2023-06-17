import { Grid, Paper, Button } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import TVShowPosts from "./Posts/TVShowPosts";

export default function TVShowThoughts({ backToDefault, showMovieThoughts }) {
  return (
    <>
      <Button
        variant="contained"
        onClick={backToDefault}
        sx={{ backgroundColor: "black", textAlign: "center" }}
      >
        Back to Blog Page
      </Button>
      <Button
        variant="contained"
        onClick={showMovieThoughts}
        sx={{ marginLeft: 3, backgroundColor: "black", textAlign: "center" }}
      >
        Movie Thoughts
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{
              marginTop: 5,
              textAlign: "center",
              fontSize: 35,
            }}
            elevation={0}
          >
            Current Reviews (TV)
          </Paper>
          <CurrentReviewCard {...TVShowPosts.Suits} />
          <CurrentReviewCard {...TVShowPosts.MadMen} />
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              textAlign: "center",
              marginTop: 10,
              // maxWidth: "50%",
              fontSize: 35,
            }}
            elevation={0}
          >
            Upcoming Reviews (TV)
          </Paper>
          <UpcomingReviewCard title={TVShowPosts.BreakingBad.title} />
          <UpcomingReviewCard title="House of Cards (2013) | Beau Willimon | Kevin Spacey, Robin Wright" />
        </Grid>
      </Grid>
    </>
  );
}
