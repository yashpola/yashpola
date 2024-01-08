import {
  Grid,
  Backdrop,
  Button,
  Paper,
  Stack,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import { Home, ImportExport, LiveTv, Movie } from "@mui/icons-material";
import CurrentReviewCard from "./CurrentReviewCard";
import MoviePosts from "./Posts/MoviePosts";
import React, { useState } from "react";

export default function MovieThoughts({ backToDefault, showTVThoughts }) {
  const [open, setOpen] = useState(false);
  const [recencyOptions, setRecencyOptions] = useState(false);
  const [ratingOptions, setRatingOptions] = useState(false);
  const [yearOptions, setYearOptions] = useState(false);
  const [boxOfficeOptions, setBoxOfficeOptions] = useState(false);
  const [sortByEarliestReview, setSortByEarliestReview] = useState(false);
  const [sortByLatestReview, setSortByLatestReview] = useState(false);
  const [sortByHighestRating, setSortByHighestRating] = useState(true);
  const [sortByLowestRating, setSortByLowesttRating] = useState(false);
  const [sortByEarliestYear, setSortByEarliestYear] = useState(false);
  const [sortByLatestYear, setSortByLatestYear] = useState(false);
  const [sortByHighestGrossing, setSortByHighestGrossing] = useState(false);
  const [sortByLowestGrossing, setSortByLowestGrossing] = useState(false);

  function sorter(review1, review2) {
    if (sortByHighestRating) {
      return review2.props.rating - review1.props.rating;
    } else if (sortByLowestRating) {
      return review1.props.rating - review2.props.rating;
    } else if (sortByEarliestYear) {
      return review1.props.year - review2.props.year;
    } else if (sortByLatestYear) {
      return review2.props.year - review1.props.year;
    } else if (sortByHighestGrossing) {
      return review2.props.boxOffice - review1.props.boxOffice;
    } else if (sortByLowestGrossing) {
      return review1.props.boxOffice - review2.props.boxOffice;
    } else if (sortByEarliestReview) {
      return review1.props.order - review2.props.order;
    } else if (sortByLatestReview) {
      return review2.props.order - review1.props.order;
    }
  }
  function handleClose(e) {
    e.preventDefault();
    setOpen(false);
  }
  function handleOpen(e) {
    e.preventDefault();
    setRecencyOptions(false);
    setRatingOptions(false);
    setYearOptions(false);
    setBoxOfficeOptions(false);
    setOpen(true);
  }

  const sortingOptions = [
    <>
      <Button
        style={{
          color: "white",
          textDecoration: recencyOptions ? "underline" : "none",
          display: "flex",
          justifyContent: "left",
        }}
        onClick={(e) => {
          e.preventDefault();
          setRecencyOptions(!recencyOptions);
        }}
        // endIcon={<CalendarMonth />}
      >
        Recency
      </Button>
      {recencyOptions && (
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
                setSortByEarliestReview(true);
                setSortByLatestReview(false);
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliestYear(false);
                setSortByLatestYear(false);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
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
                setSortByEarliestReview(false);
                setSortByLatestReview(true);
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliestYear(false);
                setSortByLatestYear(false);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
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
                setSortByEarliestReview(false);
                setSortByLatestReview(false);
                setSortByHighestRating(true);
                setSortByLowesttRating(false);
                setSortByEarliestYear(false);
                setSortByLatestYear(false);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
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
                setSortByEarliestReview(false);
                setSortByLatestReview(false);
                setSortByHighestRating(false);
                setSortByLowesttRating(true);
                setSortByEarliestYear(false);
                setSortByLatestYear(false);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
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
                setSortByEarliestReview(false);
                setSortByLatestReview(false);
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliestYear(true);
                setSortByLatestYear(false);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
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
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliestYear(false);
                setSortByLatestYear(true);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
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
    <>
      <Button
        style={{
          color: "white",
          textDecoration: boxOfficeOptions ? "underline" : "none",
          display: "flex",
          justifyContent: "left",
        }}
        onClick={(e) => {
          e.preventDefault();
          setBoxOfficeOptions(!boxOfficeOptions);
        }}
        // endIcon={<AttachMoney />}
      >
        Box Office
      </Button>
      {boxOfficeOptions && (
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
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliestYear(false);
                setSortByLatestYear(false);
                setSortByHighestGrossing(true);
                setSortByLowestGrossing(false);
                handleClose(e);
              }}
            >
              Highest grossing first
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
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(false);
                setSortByHighestRating(false);
                setSortByLowesttRating(false);
                setSortByEarliestYear(false);
                setSortByLatestYear(false);
                setSortByHighestGrossing(false);
                setSortByLowestGrossing(true);
                handleClose(e);
              }}
            >
              Lowest grossing first
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

  const movieReviews = [
    <CurrentReviewCard {...MoviePosts.Sicario} />,
    <CurrentReviewCard {...MoviePosts.SpaceOdyssey} />,
    <CurrentReviewCard {...MoviePosts.Inglourious} />,
    <CurrentReviewCard {...MoviePosts.KOTF} />,
    <CurrentReviewCard {...MoviePosts.NoCountry} />,
    <CurrentReviewCard {...MoviePosts.TWWB} />,
    <CurrentReviewCard {...MoviePosts.Oppenheimer} />,
    <CurrentReviewCard {...MoviePosts.TheBatman} />,
    <CurrentReviewCard {...MoviePosts.Birdman} />,
    <CurrentReviewCard {...MoviePosts.TrainingDay} />,
    <CurrentReviewCard {...MoviePosts.OldBoy} />,
    <CurrentReviewCard {...MoviePosts.Casino} />,
    <CurrentReviewCard {...MoviePosts.TheAviator} />,
    <CurrentReviewCard {...MoviePosts.Goodfellas} />,
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
            onClick={showTVThoughts}
            variant="contained"
          >
            <LiveTv />
          </Button>
          <Button
            sx={{
              backgroundColor: "black",
              border: "none",
              marginTop: 2,
              marginLeft: 2,
            }}
            onClick={handleOpen}
            variant="contained"
          >
            <ImportExport />
          </Button>{" "}
        </Grid>
        <Grid item xs={12}>
          <h1>Yashy's Movie Thoughts</h1>
        </Grid>
        {movieReviews
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
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
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
    </>
  );
}
