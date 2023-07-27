import React, { useEffect } from "react";

const MatomoTracker = () => {
  useEffect(() => {
    // Track page view when the component mounts
    window._paq.push(["trackPageView"]);

    // Clean up the tracker when the component unmounts
    return () => {
      // You can also track an "exit page" event here if you want
    };
  }, []);

  return null;
};

export default MatomoTracker;
