import { Card, Divider, Grid } from "@mui/material";
import IntroSection from "./IntroSection";
import ProfessionalContactCard from "./ProfessionalContactCard";
import PersonalContactCard from "./PersonalContactCard";
import CatFact from "./CatFact";

export default function AboutPage() {
  return (
    <>
      <Card sx={{ width: "80%", margin: "auto", marginTop: 5 }} elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <IntroSection />
          </Grid>
          <Divider
            sx={{ borderWidth: 1, borderColor: "black" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              margin: "auto",
            }}
          >
            <ProfessionalContactCard />
            <PersonalContactCard />
          </Grid>
        </Grid>
      </Card>
      <CatFact />
    </>
  );
}
