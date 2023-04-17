import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import { Wrapper, Main } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
