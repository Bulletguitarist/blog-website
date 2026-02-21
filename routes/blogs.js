const router = require("express").Router();
const Blog = require("../models/Blog");
const auth = require("./middleware");

router.post("/create", auth, async(req,res)=>{
  await new Blog({
    title:req.body.title,
    content:req.body.content,
    userId:req.user.id
  }).save();
  res.send("Blog Created");
});

router.get("/", async(req,res)=>{
  res.json(await Blog.find());
});

router.delete("/:id", auth, async(req,res)=>{
  await Blog.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

router.put("/:id", auth, async(req,res)=>{
  await Blog.findByIdAndUpdate(req.params.id,req.body);
  res.send("Updated");
});

module.exports = router;
