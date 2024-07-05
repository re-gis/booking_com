import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import All from "./components/All";
import Footer from "./components/Footer";
import PlaceDetails from "./components/PlaceDetails";
import Home from "./components/Home";
import Archives from "./components/Archives";
import FilterSidebar from "./components/FilterSidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/detail/*" // Ensure to match any subsequent path after /detail/
          element={
            <div className="min-h-screen flex flex-col relative">
              <Header />
              <div className="bg-secondary py-16 w-full"></div>
              <main className="flex-grow lg:mx-[10%] -mt-10 align-middle self-center z-20 bg-white shadow-xl h-full text-white">
                <Routes>
                  <Route path="/" element={<All />} />
                  <Route path=":placeId" element={<PlaceDetails />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/archives/*"
          element={
            <div>
              <Header />
              <div className="flex  gap-2 px-[4%] pt-10 pb-5">
                <FilterSidebar onFiltersChange={(e) => console.log(e)} />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Archives />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
