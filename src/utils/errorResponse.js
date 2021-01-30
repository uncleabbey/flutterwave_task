const errorResponse = (res, error) => {
  const { status, err } = error;
  console.log(error);
  res.status(status || 500);
  return res.json({
    message: err,
    status: "error",
    data: null,
  });
};

export default errorResponse;
