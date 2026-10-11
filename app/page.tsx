import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import FeaturedStory from "./components/FeaturedStory";
import LatestFeatures from "./components/LatestFeatures";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <FeaturedStory />
        <LatestFeatures />
      </main>
    </>
  );
}
