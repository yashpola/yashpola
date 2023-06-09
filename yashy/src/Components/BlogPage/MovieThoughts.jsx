import { Card, Grid, Paper } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import MoviePosts from "./Posts/MoviePosts";

export default function MovieThoughts() {
  return (
    <div id="thoughtsgrid">
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
            Current Reviews (Movies)
            <br />
          </Paper>
          <CurrentReviewCard
            title={MoviePosts.Inglourious.title}
            quote={MoviePosts.Inglourious.quote}
            thoughts={MoviePosts.Inglourious.thoughts}
            rating={MoviePosts.Inglourious.rating}
            trivia={MoviePosts.Inglourious.trivia}
          />
          <CurrentReviewCard
            title={MoviePosts.TrainingDay.title}
            quote={MoviePosts.TrainingDay.quote}
            thoughts={MoviePosts.TrainingDay.thoughts}
            rating={MoviePosts.TrainingDay.rating}
            trivia={MoviePosts.TrainingDay.trivia}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 35,
            }}
            elevation={0}
          >
            Upcoming Reviews (Movies)
          </Paper>
          <UpcomingReviewCard title="No Country for Old Men (2007) | Coen Brothers | Javier Bardem, Josh Brolin, Woody Harrelson" />
          <UpcomingReviewCard title="Nocturnal Animals (2016) | Tom Ford | Jake Gyllenhaal, Amy Adams, Michael Shannon" />
        </Grid>
      </Grid>
    </div>
  );
}
