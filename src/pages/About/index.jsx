import React from "react";
import HeroPage from "./HeroPage";
import StoryPage from "./StoryPage";
import Benefit from "./Benefit";
import Number from "./Number";
import Study from "./Study";
import Gallery from "./Gallery";
import Teacher from "./Teacher";
import CallRegister from "./CallRegister";
import useQuery from "../../hooks/useQuery";
import { galleryService } from "../../services/galleryService";
import { teamService } from "../../services/teamService";

const About = () => {
  const { data: galleriesData, loading: galleryLoading } = useQuery(() =>
    galleryService.getGalleries()
  );
  const galleries = galleriesData?.galleries[0].images;

  const { data: teamsData, loading: teamsLoading } = useQuery(() =>
    teamService.getTeams()
  );
  const teams = teamsData?.teams || {};

  return (
    <>
      <main className="mainwrapper aboutpage">
        <HeroPage />
        <StoryPage />
        <Benefit />
        <Number />
        <Study />
        <Gallery galleries={galleries} loading={galleryLoading} />
        <Teacher teams={teams} loading={teamsLoading} />
        <CallRegister />
      </main>
    </>
  );
};

export default About;
