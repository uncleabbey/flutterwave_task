const successResponse = (res, status, message, data) =>
  res.status(status).json({
    status: "success",
    message,
    data,
  });

export default successResponse;
