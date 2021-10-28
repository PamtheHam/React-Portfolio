import React from "react";
import NoteTakerCard from "../projects/NoteTakerCard";
import SkyGazerCard from "../projects/SkyGazerCard";
import PFFCard from "../projects/PFFCard";
import ReadMeGeneratorCard from "../projects/ReadMeGeneratorCard";
import WorkDaySchedulerCard from "../projects/WorkDaySchedulerCard";
import ReactTaskTrackerCard from "../projects/ReactTaskTrackerCard";

const PortfolioPage = () => {
  return (
    <>
      <ReactTaskTrackerCard />
      <PFFCard />
      <SkyGazerCard />
      <NoteTakerCard />
      <ReadMeGeneratorCard />
      <WorkDaySchedulerCard />
    </>
  );
};

export default PortfolioPage;
