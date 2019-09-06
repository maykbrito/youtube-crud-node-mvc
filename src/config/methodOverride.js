const methodOverride = require("method-override");

module.exports = methodOverride((req, res) => {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
});
