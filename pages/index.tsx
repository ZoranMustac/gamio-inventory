import { FC } from "react";
import Header from "@component/pages/header/header";
import Routing from "@component/pages/routes/routing";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
};

export default Home;
