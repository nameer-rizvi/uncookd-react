import styled from "styled-components";

// ${({ $stylePreset, theme }) =>
//   $stylePreset !== "fixed" ? theme.preset.sticky : ""}

const FeedNavStyled = styled.nav`
  padding: ${({ $stylePreset }) =>
    $stylePreset === "fixed" ? "60px 0 30px 0" : ""};

  z-index: ${({ theme }) => theme.zIndex.feedNav};
`;

export default FeedNavStyled;
