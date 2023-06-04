import { Card } from "@mui/material";

export default function MoreToCome({ numCards }) {
  const widthCard = 100 / { numCards };
  return (
    <Card
      sx={{
        width: "{widthCard}%",
        backgroundColor: "#D3D3D3",
        margin: 5,
        padding: 2,
      }}
      elevation={10}
    >
      More to come...
    </Card>
  );
}
