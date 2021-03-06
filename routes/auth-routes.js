const { verifySignUp } = require("../config/middleware/authorization.js");
const controller = require("../controllers/auth-controller");

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.put("/api/changePassword", controller.changePassword);
  app.post("/api/auth/signin", controller.signin);
  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUsernameOrEmail],
    controller.signup
  );
  //app.post("/api/post", controller.post);
};
