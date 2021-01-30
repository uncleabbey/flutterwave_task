const errorResponse = (res, error) => {
  const { status, err } = error;
  /* istanbul ignore next */
  res.status(status || 500);
  return res.json({
    message: err,
    status: "error",
    data: null,
  });
};

export default errorResponse;
