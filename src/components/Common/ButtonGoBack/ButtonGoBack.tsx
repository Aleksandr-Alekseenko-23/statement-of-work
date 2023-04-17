import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageGoBack, Button, TextButton } from "./ButtonGoBack.styled";
import GoBack from "../../../assets/img/pngwing.com.png";

const ButtonGoBack: React.FC = () => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <>
      <Button onClick={() => navigation(location?.state?.from ?? "/")}>
        <ImageGoBack src={GoBack} alt="go back" />
        <TextButton>Go back</TextButton>
      </Button>
    </>
  );
};

export default ButtonGoBack;
