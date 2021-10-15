import styled from "styled-components";

export const ArticleListItemPlaceholder = styled.div`
  width: 100%;
  height: ${({ $height }) => $height + "px"};
  background-color: ${({ theme }) => theme.color.light[5]};
  opacity: 0.6;
`;

// import Skeleton from "react-loading-skeleton";
//
// https://www.npmjs.com/package/react-loading-skeleton
//
// const SkeletonContainer = styled.div`
//   height: ${({ height }) => height + "px"};
//   width: 100%;
//   span:first-child {
//     display: contents;
//   }
// `;
//
// export const ArticleListItemSkeleton = ({ height }) => (
//   <SkeletonContainer height={height}>
//     <Skeleton />
//   </SkeletonContainer>
// );
