import React from "react";
import { usePageDetails } from "Layout/AppLayout";
import Table from "components/Table";
import Insights from "components/Insights";
import Graph from "components/Graph";

const OverView = () => {
  const { setPageTitle } = usePageDetails();
  React.useLayoutEffect(() => {
    setPageTitle("Home");
    document.title = "Trans Monitor | Overview";
  }, [setPageTitle]);

  return (
    <div>
      <Insights />
      <Graph />
      <Table />
    </div>
  );
};

export default OverView;
