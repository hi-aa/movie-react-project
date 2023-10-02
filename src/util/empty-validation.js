const isEmptyStr = (str = "") => {
  return !str || str?.trim().length === 0;
};

const isEmptyObject = (obj = {}) => {
  return !obj || Object.keys(obj).length === 0;
};

export { isEmptyStr, isEmptyObject };
