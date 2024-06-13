import React from "react";
import { AdContainer, Container, Hero, Posts } from "../components";

function Home() {
  return (
    <Container className="flex flex-col gap-20">
      <Hero />
      <div className="flex flex-col gap-20">
        <AdContainer />

        <div className="flex flex-col gap-8">
          <h2 className="text-lighht-secondary-800 text-2xl font-bold">
            Latest Posts
          </h2>
          <Posts />
        </div>
      </div>
    </Container>
  );
}

export default Home;
