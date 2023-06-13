import { Grid, Paper } from "@mui/material";
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
          <CurrentReviewCard {...MoviePosts.Inglourious} />
          <CurrentReviewCard {...MoviePosts.TrainingDay} />
          <CurrentReviewCard {...MoviePosts.NoCountry} />
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
          <UpcomingReviewCard title="Nocturnal Animals (2016) | Tom Ford | Jake Gyllenhaal, Amy Adams, Michael Shannon" />
          <UpcomingReviewCard title="The Nice Guys (2016) | Shane Black | Ryan Gosling, Russell Crowe" />
        </Grid>
      </Grid>
    </div>
  );
}
