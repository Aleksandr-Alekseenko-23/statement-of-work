import { StyledSection } from "./Section.styled";
import { SectionProps } from "../../../utils/types/types";

export default function Section({ style, children }: SectionProps) {
  return (
    <>
      <StyledSection style={style}>{children}</StyledSection>
    </>
  );
}
