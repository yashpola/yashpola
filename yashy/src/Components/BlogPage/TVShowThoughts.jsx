import { Card, Grid, Paper } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import TVShowPosts from "./Posts/TVShowPosts";

export default function TVShowThoughts() {
  return (
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
        <CurrentReviewCard
          title={TVShowPosts.Suits.title}
          quote={TVShowPosts.Suits.quote}
          thoughts={TVShowPosts.Suits.thoughts}
          rating={TVShowPosts.Suits.rating}
          trivia={TVShowPosts.Suits.trivia}
        />
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
        <UpcomingReviewCard title={TVShowPosts.MadMen.title} />
        <UpcomingReviewCard title={TVShowPosts.BreakingBad.title} />
      </Grid>
    </Grid>
  );
}
