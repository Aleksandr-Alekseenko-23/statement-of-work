import React from "react";
import CardItems from "./UserItems/UserItems";
import { StyledWrapper } from "./UserList.styled";
import { User } from "../../../utils/types/types";

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <StyledWrapper>
      {users.map(({ ...user }) => (
        <CardItems key={user.id} {...user} />
      ))}
    </StyledWrapper>
  );
};

export default React.memo(UserList);
