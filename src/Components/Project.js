import React from "react";
import Container from "Components/Container";
import ProjectCard from "Components/ProjectCard";
import { ViewPager, Frame, Track, View } from "react-view-pager";

const Home = () => {
  return (
    <Container>
      <ViewPager tag="main">
        <Frame clssName="frame">
          <Track viewsToShow={2} className="track">
            <View className="view">
              <ProjectCard></ProjectCard>
            </View>
            <View className="view">
              <ProjectCard></ProjectCard>
            </View>
          </Track>
        </Frame>
      </ViewPager>
    </Container>
  );
};

export default Home;
