const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    res.status(401).json({ message: "Auth Token not found" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) res.status(403).send("You don't have valid token");
    req.user = user;
    next();
  });
};

export default authenticateToken;
