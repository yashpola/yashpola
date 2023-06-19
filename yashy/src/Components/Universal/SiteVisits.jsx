import countapi from "countapi-js";

export default function SiteVisits() {
  countapi.visits().then((result) => {
    console.log(result.value);
  });

  return;
}
