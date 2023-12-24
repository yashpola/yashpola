import { Grid } from "@mui/material";
import ProjectCardARIA from "./ProjectCardARIA";
import ProjectCardFintech from "./ProjectCardFintech";
import ariaScreenShot from "../WebsiteImages/aria.png";
import fintechScreenshot from "../WebsiteImages/fintech.png";
import laddyScreenshot from "../WebsiteImages/laddy.png";
import ProjectCardLADDY from "./ProjectCardLADDY";

export default function PortfolioPage() {
  return (
    <>
      <h1>Projects will be updated as they come!</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProjectCardARIA
            numCards={2}
            projectTitle="A.R.I.A."
            projectSummary="Website-based study assistant for NUS students"
            testLink="https://orbital-aria.vercel.app/"
            currentDocumentation="https://docs.google.com/document/d/1LfagfeOdkiKYe6ysc-XoEnK6H7rnUqI2WzRXayJLmAk/edit?usp=sharing"
            projectDemo="https://drive.google.com/file/d/1wpu2ayaO2gEmV-KSf4ePeZtkgYs0QHx8/view?usp=sharing"
            projectIssues="https://github.com/yashpola/OrbitalARIA/issues"
            projectImg={ariaScreenShot}
          />
        </Grid>
        <Grid item xs={12}>
          <ProjectCardFintech
            numCards={2}
            projectTitle="NUS Fintech Society HR System"
            projectSummary="I designed the Tasks Module"
            testLink="https://www.figma.com/file/lWujcFJxHM5bNvFg1zu8yr/ATLAS-23%2F24?type=design&node-id=7%3A3&mode=design&t=MxtbQc6sTSslPd8l-1"
            projectImg={fintechScreenshot}
          />
        </Grid>
        <Grid item xs={12}>
          <ProjectCardLADDY
            numCards={2}
            projectTitle="NUSC Impact Experience Project (W.I.P.)"
            projectSummary="Group matchmaking tool"
            projectCode=""
            projectImg={laddyScreenshot}
          />
        </Grid>
      </Grid>
    </>
  );
}
