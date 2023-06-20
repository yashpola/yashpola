import { Grid, Card } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ariaScreenShot from "../WebsiteImages/aria.png";

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
        <br />
        <p style={{ fontSize: "20px" }}>Will be updated as they come!</p>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProjectCard
            numCards={2}
            projectTitle="A.R.I.A."
            projectSummary="Website-based college study assistant (Work-in-Progress)"
            testLink="https://orbital-aria.vercel.app/"
            currentDocumentation="https://docs.google.com/document/d/1LfagfeOdkiKYe6ysc-XoEnK6H7rnUqI2WzRXayJLmAk/edit?usp=sharing"
            productDemo="https://drive.google.com/file/d/1tqDZK8Ah51cqJem-PbJ8aC-Btg8WI6lA/view?usp=sharing"
            projectImg={ariaScreenShot}
          />
        </Grid>
      </Grid>
    </>
  );
}
