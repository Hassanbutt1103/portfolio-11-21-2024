import React, { useRef } from "react";
import Body from "./components/Body";
import Layout from "./layout";
import Icon from "./components/Icons";
import Text from "./components/body 2/Text";
import Card2 from "./components/body 2/Card2";
import AfterCard from "./components/body 2/AfterCard";
import Team from "./components/Body 3/TeamSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  const teamRef = useRef(null);
  return (
    <div>
      <Layout />
      <Body teamRef={teamRef} />
      <Icon />
      <Text />
      <Card2 />
      <AfterCard />
      <Team ref={teamRef} />
      <Footer />
    </div>
  );
};

export default App;
