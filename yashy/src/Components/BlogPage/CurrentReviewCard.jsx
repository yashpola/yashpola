import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function CurrentReviewCard({
  name,
  title,
  quote,
  thoughts,
  rating,
  trivia,
  recommendations,
}) {
  return (
    <Accordion
      sx={{
        margin: "auto",
        marginTop: 3,
        maxWidth: "70%",
      }}
    >
      <AccordionSummary
        sx={{
          margin: "auto",
          marginTop: 3,
          backgroundColor: "#E9BEBE",
          fontWeight: "bold",
        }}
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          margin: "auto",
          marginTop: 3,
          fontFamily: "Roboto",
        }}
      >
        <p style={{ textAlign: "center" }}>"{quote}"</p>
        Thoughts: <br />
        {thoughts}
        <br />
        <br />
        Verdict: {rating}
        <br />
        <br />
        Trivia: {trivia}
        <br />
        <br />
        If you liked {name}, check out: {recommendations}
      </AccordionDetails>
    </Accordion>
  );
}
