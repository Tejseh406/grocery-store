import Category from "./components/layout/Category";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import LandingBanner from "./components/layout/LandingBanner";
import TopNav from "./components/layout/TopNav";

function App() {
  return (
    <div className="relative max-w-330 mx-auto">
      <TopNav />
      <Header />
      <LandingBanner />
      <Category />
      <p>Welcome to grocery store</p>
      <Footer />
    </div>
  );
}

export default App;
