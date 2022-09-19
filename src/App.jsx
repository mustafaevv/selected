import Block from "./components/Block";
import Carousel from "./components/Carousel";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Intro from "./components/Intro";
import ProductSelectel from "./components/ProductSelectel";
import Servis from "./components/Servis";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <ProductSelectel />
      <Servis />
      <Carousel/>
      <Info/>
      <Work/>
      <Block/>
      <Companies/>
      <Footer/>
    </>
  );
};

export default App;
