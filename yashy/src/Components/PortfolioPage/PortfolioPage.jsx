import { Grid, Card } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ComingSoonCard from "../Universal/ComingSoonCard";

export default function PortfolioPage() {
  return (
    <>
      <Card
        sx={{
          margin: "auto",
          marginTop: 5,
          textAlign: "center",
          fontSize: 50,
        }}
        elevation={0}
      >
        Projects
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProjectCard
            numCards={2}
            projectTitle="A.R.I.A."
            projectSummary="Website-based college study assistant (WIP)"
            testLink="https://orbital-aria.vercel.app/"
            testLogin="orbitaltester123@gmail.com"
            testPassword="OrbitalTest123"
            currentDocumentation="https://docs.google.com/document/d/14tEVievtk629qVUgPXAYXe-7gqTgg7j2Rym7HW1WDfc/edit?usp=sharing"
          />
        </Grid>
        <Grid item xs={6}>
          <ComingSoonCard numCards={2} />
        </Grid>
      </Grid>
    </>
  );
}
