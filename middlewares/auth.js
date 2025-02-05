exports.authenticate = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
