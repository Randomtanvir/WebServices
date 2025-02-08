export const replaceBlogsArrayId = (data) => {
  if (Array.isArray(data)) {
    return data.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));
  } else {
    return { id: data._id.toString(), ...data._doc };
  }
};
