import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-2N98QTHRJ2"); // Replace with your Measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
