export const handle404 = (req, res, next) => {
  return res.status(404).json({ message: "EndPoint does not exists" });
};
