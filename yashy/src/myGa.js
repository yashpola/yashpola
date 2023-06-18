import ReactGA from "react-ga";

const myGa = () => {
  // replace this with your google analytics id
  const GA_ID = "G-VGD55H8FGS";

  ReactGA.initialize(GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export default myGa;
