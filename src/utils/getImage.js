//get images from the server
//name - image name

import { BASE_URL } from "../constant";

//type - image type (i.e. blog, avatar)
export const getImage = (name, type) => {
  if (!name) {
    return null;
  }
  if (type === "avatar") {
    return `${BASE_URL}/uploads/avatar/${name}`;
  }
  if (type === "blog") {
    return `${BASE_URL}/uploads/blog/${name}`;
  }

  throw new Error("Invalid image type");
};
