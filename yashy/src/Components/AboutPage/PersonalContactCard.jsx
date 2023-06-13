import { Card, Paper, List, ListItem } from "@mui/material";
import { Instagram, Telegram } from "@mui/icons-material";

export default function PersonalContactCard() {
  return (
    <Card sx={{ marginTop: 2 }}>
      <Paper
        sx={{
          backgroundColor: "#E9BEBE",
          fontSize: 20,
          fontWeight: "bold",
          padding: 2,
        }}
        elevation={0}
      >
        <u>Personal Links</u>
      </Paper>
      <List>
        <ListItem>
          <Instagram /> &nbsp;
          <a
            style={{ color: "red", textDecoration: "none" }}
            href="https://www.instagram.com/yashypola/"
            target="_blank"
          >
            Instagram @yashypola
          </a>
        </ListItem>
        <ListItem>
          <Telegram /> &nbsp;
          <a
            style={{ color: "red", textDecoration: "none" }}
            href="https://t.me/yashypola"
            target="_blank"
          >
            Telegram @yashypola
          </a>
        </ListItem>
      </List>
    </Card>
  );
}
