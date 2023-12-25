import {
  Backdrop,
  Divider,
  Paper,
  Stack,
  Grid,
  Button,
  List,
  ListItem,
} from "@mui/material";
import CurrentReviewCard from "./CurrentReviewCard";
import TVShowPosts from "./Posts/TVShowPosts";
import { Home, ImportExport, Movie } from "@mui/icons-material";
import { useState } from "react";

export default function TVShowThoughts({ backToDefault, showMovieThoughts }) {
  const [open, setOpen] = useState(false);
  const [ratingOptions, setRatingOptions] = useState(false);
  const [yearOptions, setYearOptions] = useState(false);
  const [sortByHighestRating, setSortByHighestRating] = useState(true);
  const [sortByLowestRating, setSortByLowesttRating] = useState(false);
  const [sortByEarliest, setSortByEarliest] = useState(false);
  const [sortByLatest, setSortByLatest] = useState(false);

  function sorter(review1, review2) {
    if (sortByHighestRating) {
      return review2.props.rating - review1.props.rating;
    } else if (sortByLowestRating) {
      return review1.props.rating - review2.props.rating;
    } else if (sortByEarliest) {
      return review1.props.year - review2.props.year;
    } else if (sortByLatest) {
      return review2.props.year - review1.props.year;
    }
  }
  function handleClose(e) {
    e.preventDefault();
    setOpen(false);
  }
  function handleOpen(e) {
    e.preventDefault();
    setRatingOptions(false);
    setYearOptions(false);
    setOpen(true);
  }

  const sortingOptions = [
    <>
      <Button
        // variant="outlined"
        style={{
          color: "white",
          textDecoration: ratingOptions ? "underline" : "none",
          display: "flex",
          justifyContent: "left",
        }}
        onClick={(e) => {
          e.preventDefault();
          setRatingOptions(!ratingOptions);
        }}
        // endIcon={<Star sx={{ width: 17, height: 17 }} />}
      >
        Rating
      </Button>
      {ratingOptions && (
        <List>
          <ListItem>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setSortByHighestRating(true);
                setSortByLowesttRating(false);
                handleClose(e);
              }}
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
            >
              Highest first
            </Button>
          </ListItem>
          <ListItem>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setSortByHighestRating(false);
                setSortByLowesttRating(true);
                handleClose(e);
              }}
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
            >
              Lowest first
            </Button>
          </ListItem>
        </List>
      )}
    </>,
    <Divider sx={{ borderColor: "white" }} />,
    <>
      <Button
        style={{
          color: "white",
          textDecoration: yearOptions ? "underline" : "none",
          display: "flex",
          justifyContent: "left",
        }}
        onClick={(e) => {
          e.preventDefault();
          setYearOptions(!yearOptions);
        }}
        // endIcon={<CalendarMonth />}
      >
        Year
      </Button>
      {yearOptions && (
        <List>
          <ListItem>
            <Button
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
              onClick={(e) => {
                e.preventDefault();
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliest(true);
                setSortByLatest(false);
                handleClose(e);
              }}
            >
              Earliest first
            </Button>
          </ListItem>
          <ListItem>
            <Button
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
              onClick={(e) => {
                e.preventDefault();
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliest(false);
                setSortByLatest(true);
                handleClose(e);
              }}
            >
              Latest first
            </Button>
          </ListItem>
        </List>
      )}
    </>,
    <Divider sx={{ borderColor: "white" }} />,
    <Button
      onClick={(e) => {
        e.preventDefault();
        handleClose(e);
      }}
      sx={{ color: "white", display: "flex", justifyContent: "left" }}
    >
      Exit Sorter
    </Button>,
  ];

  const tvReviews = [
    <CurrentReviewCard {...TVShowPosts.Suits} />,
    <CurrentReviewCard {...TVShowPosts.MadMen} />,
  ];

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12}>
          <Button
            sx={{
              backgroundColor: "black",
              border: "none",
              marginTop: 2,
              marginLeft: 2,
            }}
            onClick={backToDefault}
            variant="contained"
          >
            <Home />
          </Button>{" "}
          <Button
            sx={{
              backgroundColor: "black",
              border: "none",
              marginTop: 2,
              marginLeft: 2,
            }}
            onClick={showMovieThoughts}
            variant="contained"
          >
            <Movie />
          </Button>
          <Button
            sx={{
              backgroundColor: "black",
              border: "none",
              marginTop: 2,
              marginLeft: 2,
            }}
            onClick={setOpen}
            variant="contained"
          >
            <ImportExport />
          </Button>
        </Grid>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
          // onClick={handleClose}
        >
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#2C343F",
              padding: 10,
              borderRadius: 3,
            }}
          >
            <Stack spacing={1}>
              {sortingOptions.map((elem, idx) => {
                return <div key={idx}>{elem}</div>;
              })}
            </Stack>
          </Paper>
        </Backdrop>
        <Grid item xs={12}>
          <h1>Yashy's TV Thoughts</h1>
        </Grid>
        {tvReviews
          .sort((review1, review2) => {
            return sorter(review1, review2);
          })
          .map((elem, idx) => {
            return (
              <Grid item xs={12} key={idx}>
                {elem}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
