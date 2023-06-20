import { Card, Paper, List, ListItem } from "@mui/material";
import { Article, BugReport } from "@mui/icons-material";

export default function ProjectCard({
  projectImg,
  projectTitle,
  projectSummary,
  projectDemo,
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
          <Article sx={{ color: "red" }} />
          &nbsp;
          <a
            style={{ color: "blue", textDecoration: "underline" }}
            href={currentDocumentation}
            title="ARIA's documentation"
          >
            Current documentation
          </a>
        </ListItem>
        <ListItem>
          <a
            style={{ color: "blue", textDecoration: "underline" }}
            href={projectDemo}
            title="ARIA's Demo Video"
          >
            Product Demo Video
          </a>
        </ListItem>
        <ListItem>
          <BugReport sx={{ color: "red" }} />
          &nbsp;
          <a
            style={{ color: "blue", textDecoration: "underline" }}
            href={testLink}
            title="Try out ARIA"
          >
            Try it now!
          </a>
        </ListItem>
      </List>
      <img
        id="projectImg"
        src={projectImg}
        alt="ariaSnapshot"
        style={{
          width: "100%",
          height: "auto",

          // opacity: 0.5,
        }}
      />
    </Card>
  );
}
