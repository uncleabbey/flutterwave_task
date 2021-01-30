const isJson = (text) => {
  const str = JSON.stringify(text);
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};

export default isJson;
