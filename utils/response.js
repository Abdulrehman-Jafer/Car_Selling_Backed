export const errorResponse = (res, statusCode, error) => {
  return res.status(statusCode).json({
    status: statusCode,
    error: error,
  });
};

export const successResponse = (res, statusCode, message, result) => {
  return res.status(statusCode).json({
    status: statusCode,
    message: message,
    result: result,
  });
};
