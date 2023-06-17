import { Grid, Paper, Button } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import MoviePosts from "./Posts/MoviePosts";

export default function MovieThoughts({ backToDefault, showTVThoughts }) {
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
        onClick={showTVThoughts}
        sx={{ marginLeft: 3, backgroundColor: "black", textAlign: "center" }}
      >
        TV Thoughts
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
    </>
  );
}
