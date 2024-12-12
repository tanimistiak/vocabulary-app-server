exports.logOut = async (req, res) => {
  try {
    res
      .clearCookie("auth_token")
      .json({ message: "Logged out successfully", status: true });
  } catch (error) {
    res.json({ message: "Something went wrong", status: false });
  }
};
