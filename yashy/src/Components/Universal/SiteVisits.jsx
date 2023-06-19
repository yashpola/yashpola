import { Card } from "@mui/material";

export default function SiteVisits() {
  const KEY = `e34a9374-0e49-11ee-be56-0242ac120002`;
  const NAMESPACE = "https://yashwit.com";
  const COUNT_URL = `https://api.countapi.xyz`;

  const counter = document.querySelectorAll("span");

  const getCount = async () => {
    const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
  };

  const incrementCount = async () => {
    const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
  };

  const setValue = (num) => {
    var str = num.toString().padStart(6, "0");
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      counter[index].innerHTML = element;
    }
  };

  if (localStorage.getItem("hasVisited") == null) {
    incrementCount()
      .then(() => {
        localStorage.setItem("hasVisited", "true");
      })
      .catch((err) => console.log(err));
  } else {
    getCount().catch((err) => console.log(err));
  }

  return (
    <Card sx={{ marginTop: 5 }} elevation={0}>
      <div class="counter">
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
      </div>
      <div class="message">Unique Visits to this Page</div>
    </Card>
  );
}
