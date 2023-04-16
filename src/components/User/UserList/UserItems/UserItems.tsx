import React from "react";
import Button from "../../../Common/Button/Button";
import { User } from "../../../../utils/types/types";
import {
  StyledBox,
  StyledLogo,
  StyledPicture,
  StyledAvatar,
  StyledLine,
  StyledEllipse,
  StyledTweets,
  StyledFollowers,
  StyledUser,
} from "./UserItems.styled";
import Logo from "../../../../assets/img/Logo.svg";
import Picture from "../../../../assets/img/picture.png";
import Line from "../../../../assets/img/Rectangle.png";
import Ellipse from "../../../../assets/img/Ellipse.png";
import { useAppDispatch } from "../../../../redux/hook";
import { updateUserById } from "../../../../redux/operations";

const UserItem: React.FC<User> = ({
  user,
  avatar,
  tweets,
  followers,
  id,
  subscription,
}) => {
  const dispatch = useAppDispatch();

  const handleFollowClick = (): void => {
    const newSubscription = !subscription;
    const newFollowers = newSubscription ? followers + 1 : followers - 1;
    dispatch(
      updateUserById({
        id,
        subscription: newSubscription,
        followers: newFollowers,
      })
    );
  };

  const formattedFollowers = followers.toLocaleString("en-US", {
    useGrouping: true,
  });

  return (
    <StyledBox>
      <StyledLogo src={Logo} alt="Logo" />
      <StyledPicture src={Picture} alt="Picture" />
      <StyledLine src={Line} alt="Line" />
      <StyledAvatar src={avatar} alt="Avatar" />
      <StyledEllipse src={Ellipse} alt="Ellipse" />
      <StyledUser>{user}</StyledUser>
      <StyledTweets>{tweets} TWEETS</StyledTweets>
      <StyledFollowers>{formattedFollowers} FOLLOWERS</StyledFollowers>
      <Button
        children={subscription ? "FOLLOWING" : "FOLLOW"}
        style={{
          marginTop: "26px",
          marginLeft: "auto",
          marginRight: "auto",
          background: subscription ? "#5CD3A8" : "#EBD8FF",
        }}
        onClick={handleFollowClick}
      />
    </StyledBox>
  );
};

export default UserItem;
