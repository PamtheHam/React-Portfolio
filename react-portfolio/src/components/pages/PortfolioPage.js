import React from "react";
import NoteTakerCard from "../projects/NoteTakerCard";
import SkyGazerCard from "../projects/SkyGazerCard";
import PFFCard from "../projects/PFFCard";
import ReactTaskTracker from "../projects/ReactTaskTrackerCard";
import ReadMeGeneratorCard from "../projects/ReadMeGeneratorCard";
import WorkDaySchedulerCard from "../projects/WorkDaySchedulerCard";

const PortfolioPage = () => {
  return (
    <>
      <ReactTaskTracker />
      <PFFCard />
      <SkyGazerCard />
      <NoteTakerCard />
      <ReadMeGeneratorCard />
      <WorkDaySchedulerCard />
    </>
  );
};

export default PortfolioPage;
