import { Paper, Avatar, List, ListItem } from "@mui/material";
import me from "../../me.JPG";

export default function IntroSection() {
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#E9BEBE",
          padding: 2,
          fontSize: "50px",
          textDecoration: "underline",
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
        I'm Yashwit Polapragada but you can call me Yash! I'm currently a
        sophomore at NUS College, studying Computer Science.
        <br />
        <br />
        Tidbits:
        <List>
          <ListItem>Casual Interests: Games, Music, Driving, Film</ListItem>
          <ListItem>Competitive Interests: Debate & Oratory</ListItem>
        </List>
        <List>
          Current Engagements (Summer '23):
          <ListItem>
            <a
              style={{ color: "red", textDecoration: "none" }}
              href="https://orbital.comp.nus.edu.sg/"
            >
              Orbital @NUS School of Computing
            </a>
          </ListItem>
          <ListItem>
            Product Lead &nbsp;
            <a
              style={{ color: "red", textDecoration: "none" }}
              href="https://dsc.comp.nus.edu.sg/"
            >
              @NUS Google Developer Student Clubs
            </a>
          </ListItem>
          <ListItem>
            <a
              style={{ color: "red", textDecoration: "none" }}
              href="https://nuscollege.nus.edu.sg/academics/the-nusc-curriculum/impact-experience/"
            >
              NUSC Community Impact Project
            </a>
          </ListItem>
        </List>
      </Paper>
    </>
  );
}
