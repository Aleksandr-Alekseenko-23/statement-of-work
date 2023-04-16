import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import { BoxStyled, Wrapper, Main } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main>
          <BoxStyled as={"section"}>
            <Outlet />
          </BoxStyled>
        </Main>
        <Footer />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
