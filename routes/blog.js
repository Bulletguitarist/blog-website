const router = require("express").Router();
const Blog = require("../models/blog");

router.post("/create", async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.send("Blog Created");
});

router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;
