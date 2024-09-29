export const findLiked = (likes, id) => {
  if (likes && likes.length > 0) {
    return likes.some((fav) => fav.id === id);
  }
  return false;
};
