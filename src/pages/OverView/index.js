import React from "react";
import { usePageDetails } from "Layout/AppLayout";

const OverView = () => {
  const { pageTitle, setPageTitle } = usePageDetails();
  React.useLayoutEffect(() => {
    setPageTitle("Home");
    document.title = "Trans Monitor | Overview";
  }, [setPageTitle]);

  return <div>OverView</div>;
};

export default OverView;
