import ReactGA from "react-ga";

const myGa = () => {
  // replace this with your google analytics id
  const GA_ID = "UA-000000-01";

  ReactGA.initialize(GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export default myGa;
