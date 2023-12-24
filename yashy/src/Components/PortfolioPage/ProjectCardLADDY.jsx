import { Card, Paper, List, ListItem, Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function ProjectCardLADDY({
  projectImg,
  projectTitle,
  projectSummary,
  projectCode,
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
            <u>My contributions</u>
            <ListItem>Figma translation to frontend,</ListItem>
            <ListItem>User authentication (3rd party and NUS-auth),</ListItem>
            <ListItem>DBMS</ListItem>
          </List>
          <List>
            <u>References</u>
            <ListItem>
              <GitHub sx={{ color: "red" }} />
              &nbsp;
              <a title="Codebase">Frontend, DB, and Auth repostitory</a>
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
