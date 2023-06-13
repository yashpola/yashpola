import { useCallback, useState, useLayoutEffect } from "react";
import { Paper } from "@mui/material";

export default function FactOfTheDay() {
  const [fact, setFact] = useState("Loading...");

  const fetchFact = useCallback(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact("Failed to load fact!"));
  }, [setFact]);

  useLayoutEffect(() => {
    fetchFact();
  }, []);

  return (
    <Paper
      sx={{
        margin: 5,
        padding: 2,
        textAlign: "center",
      }}
      elevation={0}
    >
      <p style={{ fontSize: "20px" }}>Cat Fact</p>
      <p style={{ color: "blue" }}>{fact}</p>
    </Paper>
  );
}
