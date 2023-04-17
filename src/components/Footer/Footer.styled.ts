import styled from "styled-components";

export const FooterWrapper = styled.footer`
  flex-shrink: 0;
  border-top: 1px solid rgba(236, 236, 236, 1);
  background-color: #fdf7f2;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(92, 211, 168);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  letter-spacing: 0.03rem;
  min-height: 44px;
`;

export const Item = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 16px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  &:last-child {
    margin-right: 0px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const WrapperDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
