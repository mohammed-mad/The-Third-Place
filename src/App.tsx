import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Workshops from "@/pages/Workshops";
import WorkshopDetails from "@/pages/WorkshopDetails";
import Booking from "@/pages/Booking";
import PrivateWorkshops from "@/pages/PrivateWorkshops";
import About from "@/pages/About";
import GalleryPage from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/:slug" element={<WorkshopDetails />} />
          <Route path="/booking/:slug" element={<Booking />} />
          <Route path="/private-workshops" element={<PrivateWorkshops />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal title="Privacy policy" />} />
          <Route path="/terms" element={<Legal title="Terms & conditions" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
