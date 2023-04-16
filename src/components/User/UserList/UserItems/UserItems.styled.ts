import styled from "styled-components";

export const StyledBox = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const StyledLogo = styled.img`
  padding-left: 20px;
  padding-top: 20px;
  position: absolute;
`;

export const StyledPicture = styled.img`
  margin-left: 36px;
  margin-top: 28px;
`;

export const StyledAvatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
`;

export const StyledLine = styled.img`
  margin-top: 18px;
`;

export const StyledEllipse = styled.img`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
`;

export const StyledTweets = styled.p`
  margin-top: 10px;
  text-align: center;
`;

export const StyledFollowers = styled.p`
  margin-top: 16px;
  text-align: center;
`;

export const StyledUser = styled.p`
  margin-top: 45px;
  text-align: center;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
