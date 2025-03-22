import AssistanceSection from "./components/AssistanceSection ";
import Navbar from "./components/Navbar";
import ProductPage from "./components/OurProduct";
import HowItWorksPage from "./components/HowItWorks";
import AboutUsPage from "./components/AboutUs";
import StorageDownloadPage from "./components/StorageDawnload";

const App = () => {
  return (
    <>
      <Navbar />
      <AssistanceSection />
      <ProductPage />
      <HowItWorksPage />
      <AboutUsPage />
      <StorageDownloadPage />
    </>
  );
};

export default App;