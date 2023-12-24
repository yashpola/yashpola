import { Grid, Button, TextField } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import MoviePosts from "./Posts/MoviePosts";

export default function MovieThoughts({ backToDefault, showTVThoughts }) {
  const movieReviews = [
    <CurrentReviewCard {...MoviePosts.Sicario} />,
    <CurrentReviewCard {...MoviePosts.SpaceOdyssey} />,
    <CurrentReviewCard {...MoviePosts.Inglourious} />,
    <CurrentReviewCard {...MoviePosts.KOTF} />,
    <CurrentReviewCard {...MoviePosts.NoCountry} />,
    <CurrentReviewCard {...MoviePosts.TWWB} />,
    <CurrentReviewCard {...MoviePosts.Oppenheimer} />,
    <CurrentReviewCard {...MoviePosts.TheBatman} />,
    <CurrentReviewCard {...MoviePosts.Birdman} />,
    <CurrentReviewCard {...MoviePosts.TrainingDay} />,
    <CurrentReviewCard {...MoviePosts.OldBoy} />,
  ];
  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
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
        {movieReviews
          .sort((review1, review2) => {
            return review2.props.rating - review1.props.rating;
          })
          .map((elem, idx) => {
            return (
              <Grid item xs={12} key={idx}>
                {elem}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
