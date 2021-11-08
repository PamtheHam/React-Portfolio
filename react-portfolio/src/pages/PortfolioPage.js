import React from "react";
import NoteTakerCard from "../components/projects/NoteTakerCard";
import SkyGazerCard from "../components/projects/SkyGazerCard";
import PFFCard from "../components/projects/PFFCard";
import ReadMeGeneratorCard from "../components/projects/ReadMeGeneratorCard";
import WorkDaySchedulerCard from "../components/projects/WorkDaySchedulerCard";
import ReactTaskTrackerCard from "../components/projects/ReactTaskTrackerCard";

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
