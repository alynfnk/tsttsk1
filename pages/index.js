import { useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import TestAssignmentContainer from "../components/TestAssignmentContainer/TestAssignmentContainer";
import GetAcquaintedContainer from "../components/GetAcquaintedContainer/GetAcquaintedContainer";
import RegisterContainer from "../components/RegisterContainer/RegisterContainer";
const OurUsers = dynamic(() => import("../components/OurUsers/OurUsers"), {
  ssr: false,
});
import Footer from "../components/Footer/Footer";
import TokenRequests from "../helpers/token";
import Haeder from "../components/Header/Header";

const Home = () => {
  useEffect(() => {
    (async () => {
      const data = await TokenRequests.getToken();
      console.log(localStorage.setItem("token", data.data.token));
    })();
  }, []);

  return (
    <>
      <Header />
      <TestAssignmentContainer />
      <GetAcquaintedContainer />
      <OurUsers />
      <RegisterContainer />
      <Footer />
    </>
  );
};

export default Home;
