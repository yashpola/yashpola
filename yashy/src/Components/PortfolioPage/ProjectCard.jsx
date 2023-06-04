import { Card, Paper, List, ListItem } from "@mui/material";

export default function ProjectCard({
  numCards,
  projectTitle,
  projectSummary,
  testLink,
  testLogin,
  testPassword,
  currentDocumentation,
}) {
  const widthCard = 100 / { numCards };

  return (
    <Card
      sx={{
        width: "{widthCard}%",
        margin: 5,
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
        Check it out...&nbsp;
        <a style={{ color: "red", textDecoration: "none" }} href={testLink}>
          here
        </a>
        <ListItem>
          Test Email: {testLogin}
          <br />
          Test Password: {testPassword}
        </ListItem>
      </List>
      Currently updated documentation...&nbsp;{" "}
      <a
        style={{ color: "red", textDecoration: "none" }}
        href={currentDocumentation}
      >
        here
      </a>
    </Card>
  );
}
