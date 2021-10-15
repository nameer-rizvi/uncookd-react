// import React, { useState } from "react";
// import { FeedArticleSectionButton as SectionButton } from "../Feed";
// import { useAxios, downloadStory } from "../../utils";
//
// function StoryArticleDownload({ id }) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//
//   const axiosConfig = { method: "GET", url: "/story/download", params: { id } };
//
//   const onClick = () =>
//     useAxios({
//       setLoading,
//       setError,
//       loading,
//       axiosConfig,
//       onSuccess: downloadStory,
//     });
//
//   return loading ? (
//     "downloading..."
//   ) : (
//     <SectionButton onClick={onClick}>
//       {error ? "failed to download, try again?" : "download"}
//     </SectionButton>
//   );
// }
//
// export default StoryArticleDownload;
