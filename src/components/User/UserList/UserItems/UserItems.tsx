import React from "react";
import Button from "../../../Common/Button/Button";
import { User } from "../../../../utils/types/types";

const UserItem: React.FC<User> = ({ user, avatar, tweets, followers }) => {
  return (
    <li>
      <img alt="logo" />
      <img alt="picture" />
      <img src={avatar} alt="avatar" />
      <span>{tweets}TWEETS</span>
      <span>{followers}FOLLOWERS</span>
      <Button children="FOLLOW" />
    </li>
  );
};

export default UserItem;

// import Box from "../../../Common/Box";
// import {
//   StyledDate,
//   StyledDesc,
//   StyledLine,
//   StyledLink,
//   StyledMeta,
//   StyledTitle,
// } from "./NewsItems.styled";

// function NewsItems({ title, url, date, description }) {
//   return (
//     <Box>
//       <StyledLine />
//       <StyledTitle>{title}</StyledTitle>
//       <StyledDesc>{description}</StyledDesc>
//       <StyledMeta>
//         <StyledDate>{date || " "}</StyledDate>
//         <StyledLink href={url} target="_blank" rel="noreferrer">
//           Read more
//         </StyledLink>
//       </StyledMeta>
//     </Box>
//   );
// }

// export default NewsItems;
