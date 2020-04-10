import { NextPage } from "next";

import HomeIntro from "../components/HomeIntro";
import ShowCase from "../components/ShowCase";

const Home: NextPage = () => (
  <div>
    <HomeIntro />
    <ShowCase />
  </div>
);

export default Home;
