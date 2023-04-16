import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Common/Loader/Loader";
import Layout from "../components/Layout/Layout";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const TweetsPage = lazy(() => import("../pages/tweetsPage/TweetsPage"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
