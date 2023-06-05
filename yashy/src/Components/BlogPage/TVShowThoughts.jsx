import { Card, Grid, Paper } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import TVShowPosts from "./Posts/TVShowPosts";

export default function TVShowThoughts() {
  return (
    <Grid container spacing={2}>
      <Card
        sx={{
          margin: "auto",
          fontSize: 45,
        }}
        elevation={0}
      >
        Yashy's TV Show Thoughts
      </Card>
      <Grid item xs={12}>
        <Paper
          sx={{
            marginTop: 5,
            textAlign: "center",
            fontSize: 35,
          }}
          elevation={0}
        >
          Current Reviews
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
          Upcoming Reviews
        </Paper>
        <UpcomingReviewCard title={TVShowPosts.MadMen.title} />
        <UpcomingReviewCard title={TVShowPosts.BreakingBad.title} />
        <UpcomingReviewCard title="House of Cards (2013) | Beau Willimon | Kevin Spacey, Robin Wright" />
      </Grid>
    </Grid>
  );
}
