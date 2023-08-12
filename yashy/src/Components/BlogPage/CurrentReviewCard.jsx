import { Card, Paper, Grid } from "@mui/material";

export default function CurrentReviewCard({
  thumbnail,
  clip,
  name,
  title,
  quote,
  thoughts,
  rating,
  trivia,
  recommendations,
}) {
  return (
    <>
      <Card
        sx={{
          // display: "flex",
          border: "3px solid #eee",
          // backgroundColor: "#eee",
          textAlign: "center",
        }}
      >
        <Card sx={{ padding: 2, textAlign: "left" }}>
          <Paper
            sx={{
              textAlign: "center",
              padding: 2,
              backgroundColor: "pink",
              marginBottom: 2,
              fontWeight: "bold",
            }}
          >
            {title}
          </Paper>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Card
                style={{
                  backgroundColor: "black",
                  padding: 10,
                  textAlign: "center",
                }}
                elevation={2}
              >
                <a href={clip} target="_blank">
                  <img
                    style={{
                      border: "3px solid white",
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    alt={name}
                    src={thumbnail}
                  />
                </a>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              style={{ fontFamily: "Times New Roman" }}
            >
              <div style={{ textAlign: "center" }}>"{quote}"</div>
              <br />
              Thoughts: <br />
              {thoughts}
              <br />
              <br />
              Verdict: <br /> {rating}
              <br />
              <br />
              Trivia: <br /> {trivia}
              <br />
              <br />
              If you liked {name}, check out: <br />
              {recommendations}
            </Grid>
          </Grid>
        </Card>
      </Card>
    </>
  );
}
