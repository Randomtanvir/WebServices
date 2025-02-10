import { replaceBlogsArrayId } from "./modifyMongodbId";

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.LOCAL_URL}/blogs`, {
      cache: "no-store", // Disable caching
    });

    const data = await res.json();
    if (data.success) {
      return replaceBlogsArrayId(data?.blogs) || [];
    }
  } catch (error) {
    return { status: 501, message: "Blog Data fetch error" };
  }
};

export const getBlogById = async (id) => {
  try {
    const res = await fetch(`${process.env.LOCAL_URL}/blogs/${id}`, {
      cache: "no-store", // Disable caching
    });

    const data = await res.json();
    return data || {};
  } catch (error) {
    return { status: 501, message: "Blog Data fetch error" };
  }
};
