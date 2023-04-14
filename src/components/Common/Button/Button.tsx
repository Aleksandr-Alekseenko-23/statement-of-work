import { StyledButton } from "./Button.styled";
import { ButtonProps } from "../../../utils/types/types";

export default function Button({
  type = "button",
  id,
  disabled = false,
  onClick,
  children,
  style,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      style={style}
    >
      {children}
    </StyledButton>
  );
}
