import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Auction from "./pages/Auction";
import Team from "./pages/Team";
import PlayerProfile from "./pages/PlayerProfile";
import Fixtures from "./pages/Fixtures";
import MatchCenter from "./pages/MatchCenter";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Videos from "./pages/Videos";
import Gallery from "./pages/Gallery";
import FanZone from "./pages/FanZone";
import Merchandise from "./pages/Merchandise";
import Tickets from "./pages/Tickets";
import Sponsors from "./pages/Sponsors";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import PointsTable from "./pages/PointsTable";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/squad" element={<Team />} />
          <Route path="/squad/:id" element={<PlayerProfile />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/match-center" element={<MatchCenter />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fanzone" element={<FanZone />} />
          <Route path="/orange-vault" element={<Merchandise />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/points-table" element={<PointsTable />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
