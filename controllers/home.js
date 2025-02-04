module.exports = {
  getIndex: async (req, res) => {
    try {
      res.render("index.ejs", {
        user: req.user,
      });
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },
};
