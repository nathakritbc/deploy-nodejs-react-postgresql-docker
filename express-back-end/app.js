const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const db = require("./models");
const compression = require("compression");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
app.use(cors());
app.use(compression());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

db.sequelize.sync();

app.use("/", indexRouter);
app.use("/users", usersRouter);

const { Todo } = db;
const Op = db.Sequelize.Op;

app.post("/todos", async (req, res) => {
  const payload = {
    ...req.body,
  };
  try {
    const data = await Todo.create(payload);
    if (!data) throw error;

    res.send({
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Todo.",
    });
    throw error;
  }
});

app.get("/todos", async (req, res) => {
  try {
    const data = await Todo.findAll({});
    if (!data) throw error;
    // console.log("process.env", process.env);
    res.send({
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving todos.",
    });
    throw error;
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
