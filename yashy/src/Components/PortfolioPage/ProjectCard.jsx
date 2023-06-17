import { Card, Paper, List, ListItem } from "@mui/material";
import ariaScreenShot from "../WebsiteImages/aria.png";

export default function ProjectCard({
  projectTitle,
  projectSummary,
  testLink,
  currentDocumentation,
}) {
  return (
    <Card
      sx={{
        width: "50%",
        margin: "auto",
        padding: 2,
      }}
      elevation={10}
    >
      <Paper
        sx={{
          fontSize: 30,
          textAlign: "center",
          backgroundColor: "#E9BEBE",
          padding: 2,
          marginBottom: 2,
        }}
      >
        <u>{projectTitle}</u>
        <p style={{ fontSize: "20px" }}>{projectSummary}</p>
      </Paper>
      <List>
        <ListItem>
          Check it out&nbsp;
          <a
            style={{ color: "red", textDecoration: "none" }}
            href={testLink}
            target="_blank"
          >
            here
          </a>
        </ListItem>
        <ListItem>
          Current documentation&nbsp;
          <a
            style={{ color: "red", textDecoration: "none" }}
            href={currentDocumentation}
          >
            here
          </a>
        </ListItem>
      </List>
      <img
        src={ariaScreenShot}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Card>
  );
}
