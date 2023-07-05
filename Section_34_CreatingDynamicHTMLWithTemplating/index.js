const express = require("express");
const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = { ...req.params };
  res.render("subreddit", { subreddit });
});

app.listen("3000", () => {
  console.log("Server Started on port 3000 ....");
});
