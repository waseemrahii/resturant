import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useLoading from "../components/Processing/useLoading";
import Processing from "../components/Processing/Processing";
import LandingPage from "../components/FoodieLocation/LandingPage";
import SignUp from "./Pages/SignUp";

const RootLayout = () => {
  const loading = useLoading();
  const [locationSet, setLocationSet] = useState(false);
  const location = useLocation();

  const handleLocationSet = () => {
    setLocationSet(true);
  };

  return (
    <>
      {/* Render LandingPage if location is not set, otherwise show the main content */}
      {!locationSet && location.pathname === "/" ? (
        <LandingPage onLocationSet={handleLocationSet} />
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {loading && <Processing />}
              <div className="w-full">
                <Outlet />
              </div>
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default RootLayout;
