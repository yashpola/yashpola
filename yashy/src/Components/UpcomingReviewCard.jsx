import { Card } from "@mui/material";

export default function UpcomingReviewCard({ title }) {
  return (
    <Card
      sx={{
        margin: "auto",
        marginTop: 3,
        maxWidth: "68%",
        backgroundColor: "#E2B513",
        padding: 2,
      }}
    >
      {title}
    </Card>
  );
}
