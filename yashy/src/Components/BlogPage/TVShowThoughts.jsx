import { Card, Grid, Paper } from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import UpcomingReviewCard from "./UpcomingReviewCard";

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
          title="Breaking Bad (2008) | Vince Gilligan & Peter Gould"
          quote=""
          review=""
          rating="10/10"
          trivia="Vince Gilligan had intended to kill off Jesse Pinkman in the first season before it was deemed that Cranston and Paul's chemistry was invaluable"
        />
        <CurrentReviewCard
          title="Mad Men (2007) | Matthew Weiner"
          quote=""
          review="aojfoa"
          rating="8/10"
          trivia="Jon Hamm and Bryan Cranston had actually met on set during the filming of their shows in the AMC studio. Cranston compared the apron and underwear he was wearing to Hamm's tailored suit and remarked that it was obvious who had the better agent."
        />
        <CurrentReviewCard
          title="Suits (2012) | Aaron Korsh"
          quote=""
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
            // maxWidth: "50%",
            fontSize: 35,
          }}
          elevation={0}
        >
          Upcoming Reviews
        </Paper>
        <UpcomingReviewCard title="House of Cards (2013) | Beau Willimon" />
        <UpcomingReviewCard title="Barry (2018) | Bill Hader" />
        <UpcomingReviewCard title="Succession (2018) | Jesse Armstrong" />
      </Grid>
    </Grid>
  );
}
