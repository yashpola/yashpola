import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ariaScreenShot from "../WebsiteImages/aria.png";

export default function PortfolioPage() {
  return (
    <>
      <h1>Projects will be updated as they come!</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProjectCard
            numCards={2}
            projectTitle="A.R.I.A."
            projectSummary="Website-based college study assistant (Work-in-Progress)"
            testLink="https://orbital-aria.vercel.app/"
            currentDocumentation="https://docs.google.com/document/d/1LfagfeOdkiKYe6ysc-XoEnK6H7rnUqI2WzRXayJLmAk/edit?usp=sharing"
            projectDemo="https://drive.google.com/file/d/1wpu2ayaO2gEmV-KSf4ePeZtkgYs0QHx8/view?usp=sharing"
            projectIssues="https://github.com/yashpola/OrbitalARIA/issues"
            projectImg={ariaScreenShot}
          />
        </Grid>
      </Grid>
    </>
  );
}
