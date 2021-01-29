const errorResponse = (res, error) => {
  const { status, error: err } = error;
  res.status(status || 500);
  return res.json({
    message: err,
    status: "error",
    data: null,
  });
};

export default errorResponse;
