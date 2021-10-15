import ProfileFeedContentZeroStatePosts from "./ProfileFeedContentZeroStatePosts";
import ProfileFeedContentZeroStateBookmarks from "./ProfileFeedContentZeroStateBookmarks";
import ProfileFeedContentZeroStateSubscribers from "./ProfileFeedContentZeroStateSubscribers";
import ProfileFeedContentZeroStateSubscriptions from "./ProfileFeedContentZeroStateSubscriptions";

const ProfileFeedContentArticlePropsPost = ({ params }) => ({
  mainButton: { action: "read" },
  plainTextAuthorTooltip: params.list === "posts",
});

const ProfileFeedContentArticlePropsSubscriptions = () => ({
  excludeTooltip: true,
});

const ProfileFeedContent = [
  {
    ArticleProps: ProfileFeedContentArticlePropsPost,
    ZeroState: ProfileFeedContentZeroStatePosts,
  },
  {
    ArticleProps: ProfileFeedContentArticlePropsPost,
    ZeroState: ProfileFeedContentZeroStateBookmarks,
  },
  {
    ArticleProps: ProfileFeedContentArticlePropsSubscriptions,
    ZeroState: ProfileFeedContentZeroStateSubscribers,
  },
  {
    ArticleProps: ProfileFeedContentArticlePropsSubscriptions,
    ZeroState: ProfileFeedContentZeroStateSubscriptions,
  },
];

export default ProfileFeedContent;
