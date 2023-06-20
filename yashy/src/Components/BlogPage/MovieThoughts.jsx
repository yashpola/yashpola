import { Grid, Button } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";
import MoviePosts from "./Posts/MoviePosts";

export default function MovieThoughts({ backToDefault, showTVThoughts }) {
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
          <h1>Current Reviews</h1>
          <CurrentReviewCard {...MoviePosts.Inglourious} />
          <CurrentReviewCard {...MoviePosts.TrainingDay} />
          <CurrentReviewCard {...MoviePosts.NoCountry} />
        </Grid>
        <Grid item xs={12}>
          <h1>Upcoming Reviews</h1>
          <UpcomingReviewCard title="Nocturnal Animals (2016) | Tom Ford | Jake Gyllenhaal, Amy Adams, Michael Shannon" />
          <UpcomingReviewCard title="The Nice Guys (2016) | Shane Black | Ryan Gosling, Russell Crowe" />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
