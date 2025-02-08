import { replaceBlogsArrayId } from "./modifyMongodbId";

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.LOCAL_URL}/blogs`);
    const data = await res.json();
    if (data.success) {
      return replaceBlogsArrayId(data?.blogs) || [];
    }
  } catch (error) {
    return { status: 501, message: "Blog Data fetch error" };
  }
};
