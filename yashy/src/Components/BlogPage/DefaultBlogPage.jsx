import {
  Box,
  Button,
  FormControl,
  TextField,
  Container,
  Card,
  Grid,
} from "@mui/material";
import { TheaterComedy } from "@mui/icons-material";

export default function DefaultBlogPage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Container
            sx={{
              backgroundColor: "#E9BEBE",
              padding: 4,
            }}
          >
            <Card
              sx={{
                fontSize: 30,
                textAlign: "center",
                padding: 2,
                borderRadius: "16px",
              }}
              elevation={0}
            >
              I document my (not spoiler-free!) brief thoughts here on the
              movies and tv shows I watch and plan to watch. Use the speed dial
              at the bottom right of this page to view either movie or tv
              thoughts!
              <br />
              <TheaterComedy sx={{ width: 100, height: 100 }} />
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
