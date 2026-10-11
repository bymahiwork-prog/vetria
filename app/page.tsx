import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import CoverStory from "./components/CoverStory";
import LatestFeatures from "./components/LatestFeatures";
import TheFuture from "./components/TheFuture";
import Series from "./components/Series";
import GetFeaturedBand from "./components/GetFeaturedBand";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// Homepage layout follows the Vetria website design (Home artboard):
// announcement bar → header → cover story → latest features → The Future →
// series → get featured → newsletter → footer.
// Copy and placeholders live in app/content/home.ts.
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main id="main">
        <h1 className="sr-only">Vetria: stories of the businesses building what&apos;s next</h1>
        <CoverStory />
        <LatestFeatures />
        <TheFuture />
        <Series />
        <GetFeaturedBand />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
