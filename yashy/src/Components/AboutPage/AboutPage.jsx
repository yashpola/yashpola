import { Card } from "@mui/material";
import IntroSection from "./IntroSection";
import CatFact from "./CatFact";

export default function AboutPage() {
  return (
    <>
      <Card
        sx={{
          width: "80%",
          margin: "auto",
          marginTop: 5,
        }}
        elevation={10}
      >
        <IntroSection />
      </Card>
      <CatFact />
    </>
  );
}
