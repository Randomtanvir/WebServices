import { replaceBlogsArrayId } from "./modifyMongodbId";

// FOR fetching data from mongo db get allBlogs
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

// fetch blog by id from mongo db
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

//get all services from mongo db
export const getServices = async () => {
  try {
    const res = await fetch(`${process.env.LOCAL_URL}/service/list`, {
      cache: "no-store", // Disable caching
    });

    const data = await res.json();
    if (data.success) {
      return data.services || [];
    }
  } catch (error) {
    return { status: 501, message: "services Data fetch error" };
  }
};
