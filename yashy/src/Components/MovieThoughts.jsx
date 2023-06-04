import { Card, Grid, Paper } from "@mui/material";
import ReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";

export default function MovieThoughts() {
  return (
    <Grid container spacing={2}>
      <Card
        sx={{
          margin: "auto",
          marginTop: 5,
          fontSize: 40,
          textDecoration: "underline",
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
          Current Reviews
        </Paper>
        <ReviewCard
          title="Inglorious Basterds (2009) | Quentin Tarantino"
          review=""
          rating="8/10"
          trivia="Tarantino almost did not make this movie due to not finding a suitable actor for the role of Hans Landa. He finally found one in the form of Christoph Waltz. As an added bonus, Waltz could already speak French and German fluently, and pickup enough Italian as well. "
        />
        <ReviewCard
          title="Heat (1995) | Michael Mann"
          review="aojfoa"
          rating="7/10"
          trivia="aojfoaij"
        />
        <ReviewCard
          title="Training Day (2001) | Antoine Fuqua"
          quote="King Kong ain't got shit on me!"
          review=""
          rating="7/10"
          trivia=""
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
          Upcoming Reviews
        </Paper>
        <UpcomingReviewCard title="Casino (1995) | Martin Scorsese" />
        <UpcomingReviewCard title="Scarface (1983) | Brian De Palma" />
        <UpcomingReviewCard title="Se7en (1996) | David Fincher" />
      </Grid>
    </Grid>
  );
}
