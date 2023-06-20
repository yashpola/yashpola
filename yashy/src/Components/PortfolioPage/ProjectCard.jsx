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
            <ListItem>
              <Article sx={{ color: "red" }} />
              &nbsp;
              <a href={currentDocumentation} title="ARIA's documentation">
                Current Documentation
              </a>
            </ListItem>
            <ListItem>
              <OndemandVideo sx={{ color: "red" }} />
              &nbsp;
              <a href={projectDemo} title="ARIA's Demo Video">
                Product Video
              </a>
            </ListItem>
            <ListItem>
              <BugReport sx={{ color: "red" }} />
              &nbsp;
              <a href={testLink} title="Try out ARIA">
                Try it Now
              </a>
            </ListItem>
            <ListItem>
              <GitHub sx={{ color: "red" }} />
              &nbsp;
              <a href={projectIssues} title="Feedback on ARIA">
                Open an Issue
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
