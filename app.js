const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

// Global Middlewares
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./partials/layout.ejs");
app.use("", express.static("public"));
app.get("", (req, res) =>
  res.render("index", {
    title: "Home",
    path: "/",
  })
);
app.get("/get-in-touch", (req, res) =>
  res.render("get-in-touch", { title: "Get In Touch", path: "/get-in-touch" })
);
app.get("/careers", (req, res) =>
  res.render("careers", { title: "Careers", path: "/careers" })
);
app.get("/faqs", (req, res) =>
  res.render("faqs", { title: "Faq’s", path: "/faqs" })
);
app.get("/accounts", (req, res) =>
  res.render("accounts", { title: "Accounts", path: "/accounts" })
);
app.get("/savings-account", (req, res) =>
  res.render("savings-account", {
    title: "Savings Account",
    path: "/savings-account",
  })
);
app.get("/current-account", (req, res) =>
  res.render("current-account", {
    title: "Current Account",
    path: "/current-account",
  })
);
app.get("/fixed-deposit-account", (req, res) =>
  res.render("fixed-deposit-account", {
    title: "Fixed Deposit Account",
    path: "/fixed-deposit-account",
  })
);
app.get("/salary-account", (req, res) =>
  res.render("salary-account", {
    title: "Salary Account",
    path: "/salary-account",
  })
);
app.get("/recurring-deposit-a-c", (req, res) =>
  res.render("recurring-deposit-a-c", {
    title: "Recurring Deposit a/c",
    path: "/recurring-deposit-a-c",
  })
);
app.get("/nri-account", (req, res) =>
  res.render("nri-account", { title: "NRI Account", path: "/nri-account" })
);
app.get("/cards", (req, res) =>
  res.render("cards", {
    title: "Cards",
    path: "/cards",
  })
);
app.get("/cashback", (req, res) =>
  res.render("cashback", { title: "Cashback", path: "/cashback" })
);
app.get("/low-interest", (req, res) =>
  res.render("low-interest", { title: "Low Interest", path: "/low-interest" })
);
app.get("/business", (req, res) =>
  res.render("business", { title: "Business", path: "/business" })
);
app.get("/travel-hotel", (req, res) =>
  res.render("travel-hotel", { title: "Travel & Hotel", path: "/travel-hotel" })
);
app.get("/home-loan", (req, res) =>
  res.render("home-loan", { title: "Home Loan", path: "/home-loan" })
);
app.get("/personal-loan", (req, res) =>
  res.render("personal-loan", {
    title: "Personal Loan",
    path: "/personal-loan",
  })
);
app.get("/vehicle-loan", (req, res) =>
  res.render("vehicle-loan", { title: "Vehicle Loan", path: "/vehicle-loan" })
);
app.get("/education-loan", (req, res) =>
  res.render("education-loan", {
    title: "Education Loan",
    path: "/education-loan",
  })
);
app.get("/gold-loan", (req, res) =>
  res.render("gold-loan", { title: "Gold Loan", path: "/gold-loan" })
);
app.get("/about-us", (req, res) =>
  res.render("about-us", { title: "About Us", path: "/about-us" })
);
app.get("/career-detail", (req, res) =>
  res.render("career-detail", {
    title: "Career Detail",
    path: "/career-detail",
  })
);
app.get("/testimonials", (req, res) =>
  res.render("testimonials", { title: "Testimonials", path: "/testimonials" })
);
app.get("**", (req, res) =>
  res.render("404", { title: "Page not found", path: "**" })
);

// Start app
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`http://localhost:${port}`));
