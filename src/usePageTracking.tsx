import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Sends a page view event each time the route changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default usePageTracking;
