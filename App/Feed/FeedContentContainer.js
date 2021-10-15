import styled from "styled-components";
import { FlexBox } from "../Element";

const FeedContentContainer = styled(FlexBox)`
  flex-grow: 1;
  min-height: 300px;

  .request-retry,
  .private-content,
  .zero-state {
    margin: auto;
  }
`;

export default FeedContentContainer;
