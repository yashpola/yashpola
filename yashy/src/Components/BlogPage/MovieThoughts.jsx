import { Card, Grid, Paper } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import MoviePosts from "./Posts/MoviePosts";

export default function MovieThoughts() {
  return (
    <div id="thoughtsgrid">
      <Grid container spacing={2}>
        <Card
          sx={{
            margin: "auto",
            fontSize: 45,
          }}
          elevation={0}
        >
          Yashy's Movie Thoughts
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
            Current
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
            Upcoming
          </Paper>
          <UpcomingReviewCard title="Casino (1995) | Martin Scorsese" />
          <UpcomingReviewCard title="Scarface (1983) | Brian De Palma" />
          <UpcomingReviewCard title="Se7en (1996) | David Fincher" />
        </Grid>
      </Grid>
    </div>
  );
}
