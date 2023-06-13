import { Card, Paper, List, ListItem } from "@mui/material";
import { Construction, LinkedIn, Email, GitHub } from "@mui/icons-material";

export default function ProfessionalContactCard() {
  return (
    <Card>
      <Paper
        sx={{
          backgroundColor: "#E9BEBE",
          padding: 2,
          fontSize: 20,
          textDecoration: "underline",
        }}
        elevation={0}
      >
        <u>Professional Links</u>
      </Paper>
      <List>
        <ListItem>
          <LinkedIn /> &nbsp;
          <a
            style={{ color: "red", textDecoration: "none" }}
            href="https://www.linkedin.com/in/yashwit-polapragada-7a507923a/"
            target="_blank"
          >
            Linkedin
          </a>
        </ListItem>
        <ListItem>
          <Email /> &nbsp; yashwit@u.nus.edu
        </ListItem>
        <ListItem>
          <GitHub /> &nbsp;
          <a
            style={{ color: "red", textDecoration: "none" }}
            href="https://github.com/yashpola"
            target="_blank"
          >
            GitHub
          </a>
        </ListItem>
      </List>
    </Card>
  );
}
