exports.me = async (req, res, next) => {
  const { user } = req;
  res.status(200).json(user);
};
