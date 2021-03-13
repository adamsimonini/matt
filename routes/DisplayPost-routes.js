const db = require("../models");
const Post = db.Post;
const User = db.User;

module.exports = function(app) {
  app.get("/api/displayPosts", (req, res) => {
    Post.findAll({
      include: [
        {
          model: User,
          required: true
        }
      ],
      order: [["createdAt", "ASC"]]
    }).then(dbPost => {
      res.json(dbPost);
    });
  });
};
