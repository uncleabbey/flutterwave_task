// error middleware
const errorResponse = (res, error) => {
  // get error from next
  const { status, err } = error;
  /* istanbul ignore next */
  res.status(status || 500);

  // return errror response
  return res.json({
    message: err,
    status: "error",
    data: null,
  });
};

export default errorResponse;
