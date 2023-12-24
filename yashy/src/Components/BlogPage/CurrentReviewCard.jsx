import { Container, Card, Paper, Grid } from "@mui/material";

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
      <>
        <Card sx={{ padding: 2 }}>
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
            <Grid item xs={12} sm={4}>
              <Container
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#B19A7A",
                  border: "5px solid #906E3E",
                  height: "100%",
                  padding: 5,
                }}
                elevation={2}
              >
                <a href={clip} target="_blank">
                  <img
                    style={{
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: "2px solid white",
                    }}
                    alt={name}
                    src={thumbnail}
                  />
                </a>
              </Container>
            </Grid>
            <Grid item xs={12} sm={8} style={{ fontFamily: "Times New Roman" }}>
              <div style={{ textAlign: "center" }}>"{quote}"</div>
              <br />
              Thoughts: <br />
              {thoughts}
              <br />
              <br />
              Verdict: <br /> {rating}/5
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
      </>
    </>
  );
}
