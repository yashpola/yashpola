import { Card, Paper, List, ListItem, Grid } from "@mui/material";
import { Article, BugReport, OndemandVideo, GitHub } from "@mui/icons-material";

export default function ProjectCard({
  projectImg,
  projectTitle,
  projectSummary,
  projectDemo,
  testLink,
  projectIssues,
  currentDocumentation,
}) {
  return (
    <Card
      sx={{
        width: "70%",
        margin: "auto",
        padding: 2,
      }}
      elevation={10}
    >
      <Paper
        className="project-summary-card"
        sx={{
          textAlign: "center",
          backgroundColor: "#E9BEBE",
          padding: 2,
          marginBottom: 2,
        }}
      >
        <h1>{projectTitle}</h1>
        <h2>{projectSummary}</h2>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <List>
            <u>Highlighted Features</u>
            <ListItem>Both member and admin-only views,</ListItem>
            <ListItem>
              Static clicking and Dynamic drag-and-drop versions,
            </ListItem>
            <ListItem>Mobile-view designed as well</ListItem>
          </List>
          <List>
            <u>References</u>
            <ListItem>
              <BugReport sx={{ color: "red" }} />
              &nbsp;
              <a href={testLink} title="Try out ARIA">
                Check it out
              </a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            id="projectImg"
            src={projectImg}
            alt="ariaSnapshot"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
