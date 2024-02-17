import http from "../http-interceptor";

const getFeeds = (page) => {
  return http.get(`/quora/post?limit=50&page=${page}`);
};

const PostService = {
  getFeeds,
};

export default PostService;
