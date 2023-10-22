import { Paper, Avatar, List, ListItem, Stack } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  Instagram,
  Telegram,
} from "@mui/icons-material";
import me from "../../me.JPG";

export default function IntroSection() {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#E9BEBE",
          padding: 2,
          fontSize: "50px",
        }}
        elevation={0}
      >
        The ABCs of Me
      </Paper>
      <Avatar
        src={me}
        alt="My Image"
        sx={{
          marginTop: 2,
          width: 150,
          height: 150,
          marginLeft: 2,
        }}
      ></Avatar>
      <Paper
        sx={{
          padding: 2,
          backgroundColor: "white",
          fontSize: "20px",
          letterSpacing: 1,
        }}
        elevation={0}
      >
        <b>
          I'm Yashwit Polapragada but you can call me Yash! I'm currently a
          sophomore at NUS College, studying Computer Science.
        </b>
        <br />
        <br />
        Tidbits:
        <List>
          <ListItem>Casual Interests: Games, Music, Driving, Film</ListItem>
          <ListItem>Competitive Interests: Debate & Oratory</ListItem>
        </List>
        <List>
          Current Engagements (Fall Semester 23/24):
          <ListItem>Product Head @NUS Google Developer Student Clubs</ListItem>
          <ListItem>UI/UX Designer @NUS Fintech Society</ListItem>
          <ListItem>Programming Methodology II (Java)</ListItem>
          <ListItem>Intro to Networks (Python)</ListItem>
          <ListItem>Database Systems (PostgreSQL)</ListItem>
          <ListItem>Digital Ethics</ListItem>
        </List>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 3,
          }}
          elevation={0}
        >
          <Stack direction="row" spacing={2}>
            <a
              href="https://www.linkedin.com/in/yashwit-polapragada-7a507923a/"
              title="Yashwit's Linkedin"
            >
              <LinkedIn sx={{ color: "#0072b1" }} />
            </a>
            <a href="https://github.com/yashpola" title="Yashwit's GitHub">
              <GitHub sx={{ color: "black" }} />
            </a>
            <a href="mailto: yashwit@u.nus.edu" title="Yashwit's Email">
              <Email sx={{ color: "green" }} />
            </a>
            <a
              href="https://www.instagram.com/yashypola/"
              title="Yashwit's Instagram"
            >
              <Instagram sx={{ color: "red" }} />
            </a>
            <a href="https://t.me/yashypola" title="Yashwit's Telegram">
              <Telegram sx={{ color: "#0088cc" }} />
            </a>
          </Stack>
        </Paper>
      </Paper>
    </>
  );
}
