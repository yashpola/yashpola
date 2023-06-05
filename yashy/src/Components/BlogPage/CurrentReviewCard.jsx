import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function CurrentReviewCard({
  title,
  quote,
  thoughts,
  rating,
  trivia,
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
      </AccordionDetails>
    </Accordion>
  );
}
