import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function CurrentReviewCard({
  title,
  quote,
  review,
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
      <AccordionDetails>
        <p style={{ textAlign: "center" }}>"{quote}"</p>
        Review: <br />
        {review}
        <br />
        Verdict: {rating}
        <br />
        <br />
        Trivia: {trivia}
      </AccordionDetails>
    </Accordion>
  );
}
